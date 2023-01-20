using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Web.Models
{
    public class ViewCustomerRental
    {
        public int Id { get; set; }
        public int RentalId { get; set; }
        public int MovieId { get; set; }
        public string Customer { get; set; }
        public string Movie { get; set; }
        public decimal RentFee { get; set; }
        public string DateRented { get; set; }
        public string DateReturned { get; set; }
    }
}