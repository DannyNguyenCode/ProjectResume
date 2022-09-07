using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Interfaces;
using Microsoft.Extensions.Options;
namespace resumeProject.api.Models
{
    public class Login : ILogin<User>
    {
        public List<User> users { get; set; }
        public Login()
        {
            this.users = new List<User>();
        }


    }
}
