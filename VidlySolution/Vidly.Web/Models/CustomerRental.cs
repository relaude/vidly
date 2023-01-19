using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class CustomerRental
    {
        public int Id { get; set; }
        public int Rental_Id { get; set; }
        public int Movie_Id { get; set; }
        public decimal RentFee { get; set; }
        public DateTime DateRented { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}