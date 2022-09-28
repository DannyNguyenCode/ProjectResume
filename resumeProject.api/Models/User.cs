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
        [DataMember]
        public string FirstName { get; set; }
        [DataMember]
        public string LastName { get; set; }
        [DataMember]
        public bool IsAdmin { get; set; }
        public User()
        {

        }
        public User(Int32 _userid, string _firstname, string _lastname, string _email, string _password, bool _isAdmin)
        {
            UserID = _userid;
            FirstName = _firstname;
            LastName = _lastname;
            Email = _email;
            Password = _password;
            IsAdmin = _isAdmin;
        }
    }
}
