using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Models;

namespace Vidly.Web.Dtos
{
    public class ViewMovieDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public int Genre_Id { get; set; }
        public decimal RentFee { get; set; }
        public int Stock { get; set; }
    }

    public class PaginatedViewMovieDto
    {
        public int TotalRows { get; set; }
        public IEnumerable<ViewMovie> Results { get; set; }
    }
}