using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Interfaces;
namespace resumeProject.api.Models
{
    public class DatabaseConfigurations : IDatabaseConfigurations
    {
        public string masterDatabase { get; set; }

    }
}
