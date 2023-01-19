using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Vidly.Web.Models;

namespace Vidly.Web.Dtos
{
    public class MovieDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Name { get; set; }

        [Required]
        public int Genre_Id { get; set; }

        [Required]
        public decimal RentFee { get; set; }

        [Required]
        public int Stock { get; set; }
    }
}