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
    public class RentalRepository : GenericRepositoryAsync<Rental, RentalDto>
    {
        private readonly VidlyDBContext _db;
        public RentalRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }

        public async Task<IEnumerable<ViewRental>> GetViewRentas()
        {
            return await _db.ViewRentals.ToListAsync();
        }

        public async Task<AddCustomerRentalDto> CreateRentalAsync(AddCustomerRentalDto dto)
        {
            RentalDto rentalDto = new RentalDto();

            var rental = _db.Rentals.FirstOrDefault(i => i.Customer_Id == dto.CustomerId);
            
            if (rental == null) 
            { 
                rentalDto = await CreateAsync(new RentalDto { Id = 0, Customer_Id = dto.CustomerId });
                dto.RentalId = rentalDto.Id;
            }

            if (rental != null)
            { dto.RentalId = rental.Id;  }

            return dto;
        }
    }
}