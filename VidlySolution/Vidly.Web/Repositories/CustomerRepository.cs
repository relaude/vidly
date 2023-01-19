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

        public async Task<IEnumerable<ViewCustomer>> GetViewCustomers(string query = null)
        {
            if (!string.IsNullOrEmpty(query))
            { 
                return await _db.ViewCustomers
                    .Where(i=>i.DisplayName.Contains(query))
                    .ToListAsync();
            }
            
            return await _db.ViewCustomers.OrderBy(i=>i.DisplayName).ToListAsync();
        }
    }
}