using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Models;

namespace Vidly.Web.Dtos
{
    public class ViewCustomerDto
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string DisplayName { get; set; }
        public string DateOfBirth { get; set; }
        public int MembershipId { get; set; }
        public string Membership { get; set; }
    }

    public class PaginatedViewCustomerDto
    {
        public int TotalRows { get; set; }
        public IEnumerable<ViewCustomer> Results { get; set; }
    }
}