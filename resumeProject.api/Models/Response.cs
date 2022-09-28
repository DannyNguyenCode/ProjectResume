using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Interfaces;
using System.Web;
using System.Net.Http;
using System.Threading;

namespace resumeProject.api.Models
{
    public class Response<T> : IResponse<T>
    {
        public int statusCode { get; set; }
        public string message { get; set; }
        public List<T> data { get; set; }

        public int length { get; set; }


        public Response(List<T> _data, int _statusCode,string _message, int _length)
        {
            data = _data;
            statusCode = _statusCode;
            message = _message;
            length = _length;
    
        }
        public Response()
        {


        }
        public Response( int _statusCode, string _message)
        {
            statusCode = _statusCode;
            message = _message;

        }

    }
}
