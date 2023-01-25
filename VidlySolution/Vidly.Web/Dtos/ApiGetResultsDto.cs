using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Dtos
{
    public class ApiGetResultsDto
    {
        public int Results { get; set; }
        public IEnumerable<object> Items { get; set; }
    }
}