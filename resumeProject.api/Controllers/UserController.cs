using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using resumeProject.api.Models;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Helpers;
namespace resumeProject.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DatabaseConfigurations databaseConfigurations;
        public UserController(IOptions<DatabaseConfigurations> _options)
        {
            databaseConfigurations = _options.Value;
        }
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            List<UserDTO> usersList = new List<UserDTO>();
            string queryString = "SELECT * FROM dbo.Users";
            try
            {
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(queryString, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                usersList.Add(AutoMapperProfile<User, UserDTO>.Map(new User { UserID = reader.GetInt32(0), Email = reader.GetString(3), Password = reader.GetString(4) }));
                            }

                        }
                    }
                }
               if(usersList.Count > 0)
                {
                    Response<UserDTO> response = new Response<UserDTO>(usersList, 200, "Successfully retreived all users from the database", usersList.Count);
                    return Ok(response);
                }
                else
                {
                    Response<UserDTO> response = new Response<UserDTO>(usersList, 204, "Successfully retreived all users from database, but no records were found", usersList.Count);
                    return NotFound(response);
                }
  
            }
            catch
            {
                Response<UserDTO> response = new Response<UserDTO>(500, "Error: Problem when trying to query users from database");
                return NotFound(response);
            }
        }

    }
}
