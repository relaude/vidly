using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class ViewMovie
    {
        public int Id { get; set; }
        public string Movie { get; set; }
        public string Genre { get; set; }
        public int GenreId { get; set; }
        public decimal RentFee { get; set; }
        public int Stock { get; set; }
    }
}