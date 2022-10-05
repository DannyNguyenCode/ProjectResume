using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using resumeProject.api.Models;
using System.Data.SqlClient;
using resumeProject.api.Helpers;
using System.Data;
namespace resumeProject.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly DatabaseConfigurations databaseConfigurations;
        public SkillController(IOptions<DatabaseConfigurations> _options)
        {
            databaseConfigurations = _options.Value;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllSkills([FromQuery] int userID)
        {
            List<SkillDTO> skillsList = new List<SkillDTO>();
            string queryString = "SELECT * FROM dbo.Skills where UserID=@UserID";
            try
            {
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand (queryString, connection))
                    {
                        command.Parameters.Add("@UserID", SqlDbType.Int).Value = userID;
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                skillsList.Add(AutoMapperProfile<Skill, SkillDTO>.Map(new Skill { ID = reader.GetInt32(0) ,name = reader.GetString(2).Trim(), description = reader.GetString(3).Trim(), category=reader.GetString(4).Trim(), rating = reader.GetInt32(5) }));
                            }
                        }
                    }
                    if (skillsList.Count > 0)
                    {
                        Response<SkillDTO> response = new Response<SkillDTO>(skillsList, 200, "Successfully retreived all skills from the database", skillsList.Count);
                        return Ok(response);
                    }
                    else
                    {
                        Response<SkillDTO> response = new Response<SkillDTO>(skillsList, 204, "Successfully retreived all skills from database, but no records were found", skillsList.Count);
                        return NotFound(response);
                    }

                }
            }
            catch
            {
                Response<SkillDTO> response = new Response<SkillDTO>(500, "Error: Problem with connection to database");
                return NotFound(response);
            }
        }

        [HttpPost("adminaddskill")]
        public async Task<IActionResult> AdminAddSkill([FromQuery]int userID, [FromBody] Skill skill)
        {
            try
            {
                string queryString = "INSERT INTO dbo.Skills (ID, UserID, Name, Description, Category, Rating) VALUES(@ID, @UserID, @Name, @Description, @Category, @Rating)";
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(queryString, connection))
                    {
                        command.Parameters.Add("@ID", SqlDbType.Int).Value = skill.ID;
                        command.Parameters.Add("@UserID", SqlDbType.Int).Value = userID;
                        command.Parameters.Add("@Name", SqlDbType.NVarChar).Value = skill.name;
                        command.Parameters.Add("@Description", SqlDbType.NVarChar).Value = skill.description;
                        command.Parameters.Add("@Category", SqlDbType.NVarChar).Value = skill.category;
                        command.Parameters.Add("@Rating", SqlDbType.Int).Value = skill.rating;
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                return Ok("Skill Added");
            }
            catch
            {
                Response<SkillDTO> response = new Response<SkillDTO>(500, "Error: Problem with connection to database");
                return NotFound(response);
            }
        }
        [HttpPut("adminupdateskillrating")]
        public async Task<IActionResult> AdminUpdateSkill([FromQuery] int userID, [FromQuery] int rating)
        {
            try
            {
                string queryString = "UPDATE dbo.Skills SET Rating = @rating WHERE UserID = @userID";
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(queryString, connection))
                    {
                        command.Parameters.Add("@userID", SqlDbType.Int).Value = userID;
                        command.Parameters.Add("@rating", SqlDbType.Int).Value = rating;
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                return Ok("Skill Rating has been updated");
            }
            catch
            {
                Response<SkillDTO> response = new Response<SkillDTO>(500, "Error: Problem with connection to database");
                return NotFound(response);
            }
        }
        [HttpDelete("admindeleteskill")]
        public async Task<IActionResult> AdminDeleteSkill([FromQuery] int userID, [FromQuery] int skillID)
        {
            try
            {
                string queryString = "DELETE FROM dbo.Skills WHERE ID = @skillID AND UserID = @userID";
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(queryString, connection))
                    {
                        command.Parameters.Add("@userID", SqlDbType.Int).Value = userID;
                        command.Parameters.Add("@skillID", SqlDbType.Int).Value = skillID;
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                return Ok("Skill has been deleted");
            }
            catch
            {
                Response<SkillDTO> response = new Response<SkillDTO>(500, "Error: Problem with connection to database");
                return NotFound(response);
            }
        }

    }
}
