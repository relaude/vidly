using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class RentalRepository : GenericRepositoryAsync<Rental, RentalDto>
    {
        private readonly VidlyDBContext _db;
        public RentalRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }
    }
}