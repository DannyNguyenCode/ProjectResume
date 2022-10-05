using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace resumeProject.api.Models
{
    [DataContract]
    public class SkillDTO
    {
        [DataMember]
        public int ID { get; set; }
        [DataMember]
        public string category { get; set; }
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string description { get; set; }
        [DataMember]
        public int rating { get; set; }
    }
}
