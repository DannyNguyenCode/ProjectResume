using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using resumeProject.api.Models;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;

namespace resumeProject.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatabaseConnectionController : ControllerBase
    {
        private readonly DatabaseConfigurations databaseConfigurations;

        public DatabaseConnectionController(IOptions<DatabaseConfigurations> _options)

        {
            databaseConfigurations = _options.Value;

        }
    }
}
