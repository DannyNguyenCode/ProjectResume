﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace resumeProject.api.Models
{
    [DataContract]
    public class UserDTO
    {
        [DataMember]
        public Int32 UserID { get; set; }

        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public string FirstName { get; set; }
        [DataMember]
        public string LastName{ get; set; }
        [DataMember]
        public int IsAdmin{ get; set; }


    }
}
