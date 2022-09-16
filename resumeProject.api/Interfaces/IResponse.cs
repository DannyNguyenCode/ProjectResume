using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
namespace resumeProject.api.Interfaces
{
    interface IResponse<T>
    {  
        public List<T> data { get; set; }
        public int statusCode { get; set; }
        public string message { get; set; }
        public int length { get; set; }
        
        
    }
}
