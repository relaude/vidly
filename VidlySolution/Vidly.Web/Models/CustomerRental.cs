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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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