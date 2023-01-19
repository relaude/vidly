using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Vidly.Web.Dtos;

namespace Vidly.Web.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [Min18YearsIfAMember]
        public DateTime DateOfBirth { get; set; }

        public int Membership_Id { get; set; }
    }
}