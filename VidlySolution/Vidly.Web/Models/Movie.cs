
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Vidly.Web.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Genre_Id { get; set; }
        public decimal RentFee { get; set; }
        public int Stock { get; set; }
    }
}