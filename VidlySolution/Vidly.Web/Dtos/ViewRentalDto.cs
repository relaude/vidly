using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Models;

namespace Vidly.Web.Dtos
{
    public class ViewRentalDto
    {
        public int Id { get; set; }
        public string Customer { get; set; }
        public string Membership { get; set; }
        public int Rented { get; set; }
        public int Pending { get; set; }
    }

    public class PaginatedViewRentalDto
    {
        public int TotalRows { get; set; }
        public IEnumerable<ViewRental> Results { get; set; }
    }
}