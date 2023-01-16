using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class CustomerRentalRepository : GenericRepositoryAsync<CustomerRental, CustomerRentalDto>
    {
        private readonly VidlyDBContext _db;
        public CustomerRentalRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }
    }
}