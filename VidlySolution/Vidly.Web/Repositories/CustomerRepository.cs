using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class CustomerRepository : GenericRepositoryAsync<Customer, CustomerDto>
    {
        private readonly VidlyDBContext _db;
        public CustomerRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }
    }
}