using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Web.Dtos
{
    public class AddRentalDto
    {
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public int[] MovieIds { get; set; }
    }
}