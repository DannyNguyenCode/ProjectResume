﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using resumeProject.api.Models;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Helpers;
using System.Data;
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
                                usersList.Add(AutoMapperProfile<User, UserDTO>.Map(new User { UserID = reader.GetInt32(0),FirstName = reader.GetString(1), LastName = reader.GetString(2), Email = reader.GetString(3), Password = reader.GetString(4), IsAdmin = reader.GetBoolean(5) }));
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
                Response<UserDTO> response = new Response<UserDTO>(500, "Error: Problem with connection to database");
                return NotFound(response);
            }
        }
        [HttpPost("forgotpassword")]
        public async Task<IActionResult> UpdatePassword([FromBody] User user)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);
            var sqlString = "UPDATE dbo.Users SET Password=@Password WHERE Email=@Email";
            try
            {
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();

                    using (SqlCommand command = new SqlCommand(sqlString, connection))
                    {
                        command.Parameters.Add("@Password", SqlDbType.NVarChar).Value = passwordHash;
                        command.Parameters.Add("@Email", SqlDbType.NVarChar).Value = user.Email;
                        command.ExecuteNonQuery();
                        connection.Close();
                    }
                }
                return Ok("Password updated");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return Problem("An issue on updating password: " + e.Message);
            }
        }
        [HttpPost("loginUser")]
        public async Task<IActionResult> LoginUser([FromBody] User user)
        {
            string sqlString = "SELECT * FROM dbo.Users WHERE Email=@Email";
            User userInfo = new User();
            try
            {
                await using (SqlConnection connection = new SqlConnection(databaseConfigurations.masterDatabase))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(sqlString, connection))
                    {
                        command.Parameters.Add("@Email", SqlDbType.NVarChar).Value = user.Email;
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                userInfo.Email = reader.GetString(3);
                                userInfo.Password = reader.GetString(4);
                            }
                        }
                    }
                }
                var isPasswordVerified = BCrypt.Net.BCrypt.Verify(user.Password, userInfo.Password);
                if (isPasswordVerified)
                {
                    return Ok("Login SuccessFul");
                }
                else
                {
                    return Unauthorized("Login Failed");
                }

            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return NotFound();
            }

        }

    }
}
