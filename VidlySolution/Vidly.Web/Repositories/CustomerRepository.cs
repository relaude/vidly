using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<IEnumerable<ViewCustomer>> GetViewCustomers()
        {
            return await _db.ViewCustomers.ToListAsync();
        }
    }
}