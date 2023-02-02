using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class ViewRentalRepository : GenericRepositoryAsync<ViewRental, ViewRentalDto>
    {
        public ViewRentalRepository(VidlyDBContext context) : base(context)
        {

        }
    }
}