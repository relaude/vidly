using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Vidly.Web.Dtos;
using Vidly.Web.Models;
using Vidly.Web.Repositories;

namespace Vidly.Web.Api
{
    [Authorize]
    public class RentalController : ApiController
    {
        private readonly RentalRepository _rentalRepository;
        private readonly CustomerRentalRepository _customerRentalRepository;
        private readonly MovieRepository _movieRepository;
        public RentalController()
        {
            _rentalRepository = new RentalRepository(new VidlyDBContext());
            _customerRentalRepository = new CustomerRentalRepository(new VidlyDBContext());
            _movieRepository = new MovieRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<ViewRental>> GetRentals()
        {
            var result = await _rentalRepository.GetViewRentas();
            return result.OrderByDescending(i => i.Pending).OrderBy(i=>i.Customer).ToList();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetRental(int id)
        {
            var result = await _rentalRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateRental(AddCustomerRentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _rentalRepository.CreateRentalAsync(dto);

            dto.RentalId = result.RentalId;
            await _customerRentalRepository.CreateCustomerRentals(dto);

            await _movieRepository.UpdateMovieStock(dto.MovieIds);

            return Created(new Uri($"{Request.RequestUri}/getrental/{dto.RentalId}"), dto);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateRental(RentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _rentalRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteRental(int id)
        {
            await _rentalRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
