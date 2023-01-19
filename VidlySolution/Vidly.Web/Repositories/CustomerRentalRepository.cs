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
    public class CustomerRentalRepository : GenericRepositoryAsync<CustomerRental, CustomerRentalDto>
    {
        private readonly VidlyDBContext _db;

        private readonly CustomerRepository _customerRepository;
        private readonly MembershipRepository _membershipRepository;
        private readonly MovieRepository _movieRepository;
        public CustomerRentalRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
            _customerRepository = new CustomerRepository(context);
            _membershipRepository= new MembershipRepository(context);
            _movieRepository = new MovieRepository(context);
        }

        public async Task CreateCustomerRentals(AddCustomerRentalDto dto)
        {
            var customerRentals = new List<CustomerRental>();

            var customer = await _customerRepository.GetByIdAsync(dto.CustomerId);
            var membership = await _membershipRepository.GetByIdAsync(customer.Membership_Id);

            foreach (var id in dto.MovieIds)
            {
                var movie = await _movieRepository.GetByIdAsync(id);

                var newRent = new CustomerRental
                {
                    Rental_Id = dto.RentalId,
                    Movie_Id = id,
                    DateRented = DateTime.Now,
                    RentFee = membership.DiscountRate == 0 ? movie.RentFee : movie.RentFee - (movie.RentFee * membership.DiscountRate)
                };

                customerRentals.Add(newRent);
            }

            _db.Set<CustomerRental>().AddRange(customerRentals);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<ViewCustomerRental>> GetViewCustomerRentalsByRentalIdAsync(int id)
        {
            return await _db.ViewCustomerRentals.Where(i=>i.RentalId== id).ToListAsync();
        }

        public async Task UpdateDateReturned(UpdateDateReturnDto dto)
        {
            var rental = await _db.CustomerRentals.FindAsync(dto.Id);
            rental.DateReturned = dto.DateReturned;

            await _db.SaveChangesAsync();
        }
    }
}