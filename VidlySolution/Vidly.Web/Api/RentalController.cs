using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Vidly.Web.Dtos;
using Vidly.Web.Repositories;

namespace Vidly.Web.Api
{
    public class RentalController : ApiController
    {
        private readonly RentalRepository _rentalRepository;
        public RentalController()
        {
            _rentalRepository = new RentalRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<RentalDto>> GetRentals()
        {
            return await _rentalRepository.GetListAsync();
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
        public async Task<IHttpActionResult> CreateRental(RentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _rentalRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getrental/{dto.Id}"), dto);
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
