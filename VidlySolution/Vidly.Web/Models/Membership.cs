using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class Membership
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal DiscountRate { get; set; }
    }
}