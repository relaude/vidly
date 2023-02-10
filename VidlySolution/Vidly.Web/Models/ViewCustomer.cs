using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class ViewCustomer
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string DisplayName { get; set; }
        public string DateOfBirth { get; set; }
        public int Membership_Id { get; set; }
        public string Membership { get; set; }
    }
}