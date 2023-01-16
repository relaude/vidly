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
    public class CustomerRentaController : ApiController
    {
        private readonly CustomerRentalRepository _customerRentalRepository;
        public CustomerRentaController()
        {
            _customerRentalRepository = new CustomerRentalRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerRentalDto>> GetRentals()
        {
            return await _customerRentalRepository.GetListAsync();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetRental(int id)
        {
            var result = await _customerRentalRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateRental(CustomerRentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _customerRentalRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getrental/{dto.Id}"), dto);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateRental(CustomerRentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _customerRentalRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteRental(int id)
        {
            await _customerRentalRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
