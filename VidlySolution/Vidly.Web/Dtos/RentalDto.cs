using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Web.Dtos
{
    public class RentalDto
    {
        public int Id { get; set; }
        [Required]
        public int Customer_Id { get; set; }
    }
}