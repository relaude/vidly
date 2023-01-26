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
    public class CustomerRentalController : ApiController
    {
        private readonly CustomerRentalRepository _customerRentalRepository;
        public CustomerRentalController()
        {
            _customerRentalRepository = new CustomerRentalRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerRentalDto>> GetRentals()
        {
            return await _customerRentalRepository.GetListAsync();
        }

        [HttpGet]
        public async Task<IEnumerable<ViewCustomerRental>> GetRentals(int id)
        {
            return await _customerRentalRepository.GetViewCustomerRentalsByRentalIdAsync(id);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateRental(CustomerRentalDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _customerRentalRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getrental/{dto.Id}"), dto);
        }

        //[HttpPut]
        //public async Task<IHttpActionResult> UpdateRental(CustomerRentalDto dto)
        //{
        //    if (!ModelState.IsValid)
        //        return BadRequest();

        //    await _customerRentalRepository.UpdateAsync(dto, dto.Id);

        //    return Ok();
        //}

        [HttpPut]
        public async Task<IHttpActionResult> UpdateRental(UpdateDateReturnDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _customerRentalRepository.UpdateDateReturned(dto);

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
