using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class ViewMovie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public int Genre_Id { get; set; }
        public decimal RentFee { get; set; }
        public int Stock { get; set; }
    }
}