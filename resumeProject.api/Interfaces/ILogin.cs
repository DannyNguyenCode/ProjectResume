using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace resumeProject.api.Interfaces
{
    interface ILogin<T>
    {
        public List<T> users { get; set; }
    }
}
