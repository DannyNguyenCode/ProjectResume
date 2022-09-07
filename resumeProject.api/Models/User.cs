using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace resumeProject.api.Models
{
    public class User
    {
        public Int32 UserID { get; set; }
        public string Email { get; set; }
        public string Password
        {
            get; set;
        }
        public User()
        {

        }
        public User(Int32 _userid, string _email, string _password)
        {
            UserID = _userid;
            Email = _email;
            Password = _password;
        }
    }
}
