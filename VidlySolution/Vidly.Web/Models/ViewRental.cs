using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class ViewRental
    {
        public int Id { get; set; }
        public string Customer { get; set; }
        public int Rented { get; set; }
        public int Pending { get; set; }
    }
}