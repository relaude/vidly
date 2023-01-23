using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class ViewCustomerRepository : GenericRepositoryAsync<ViewCustomer, ViewCustomerDto>
    {
        public ViewCustomerRepository(VidlyDBContext context) : base(context)
        {

        }
    }
}