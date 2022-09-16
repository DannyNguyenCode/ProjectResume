using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
namespace resumeProject.api.Models
{
    [DataContract]
    public class User
    {
        [DataMember]
        public Int32 UserID { get; set; }
        
        [DataMember]
        public string Email { get; set; }
        
        [DataMember]
        public string Password{ get; set; }
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
