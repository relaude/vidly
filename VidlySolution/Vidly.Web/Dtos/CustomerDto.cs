using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Web.Dtos
{
    public class CustomerDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string FirstName { get; set; }


        [Required]
        [StringLength(200)]
        public string LastName { get; set; }

        [Required]
        [Min18YearsIfAMember]
        public DateTime DateOfBirth { get; set; }


        [Required]
        public int Membership_Id { get; set; }
    }
}