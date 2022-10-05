using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using resumeProject.api.Interfaces;
namespace resumeProject.api.Models
{
    [DataContract]
    public class Skill : ISkills
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
        public Skill()
        {

        }
        public Skill(int _id, string _category,  string _name, string _description, int _rating)
        {
            ID = _id;
            category = _category;
            name = _name;
            description = _description;
            rating = _rating;
        }
    }
}
