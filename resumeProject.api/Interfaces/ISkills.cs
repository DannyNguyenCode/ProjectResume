using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace resumeProject.api.Interfaces
{
    interface ISkills
    {
        public int ID { get; set; }
        public string category { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int rating { get; set; }
    }
}
