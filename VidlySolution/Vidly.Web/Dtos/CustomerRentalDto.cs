using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Web.Dtos
{
    public class CustomerRentalDto
    {
        public int Id { get; set; }

        [Required]
        public int Customer_Id { get; set; }

        [Required]
        public int Movie_Id { get; set; }

        [Required]
        public decimal RentFee { get; set; }

        [Required]
        public DateTime DateRented { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}