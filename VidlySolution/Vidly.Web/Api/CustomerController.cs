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
    public class CustomerController : ApiController
    {
        private readonly CustomerRepository _customerRepository;
        public CustomerController()
        {
            _customerRepository = new CustomerRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<CustomerDto>> GetCustomers()
        {
            return await _customerRepository.GetListAsync();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetCustomer(int id)
        {
            var result = await _customerRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateCustomer(CustomerDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _customerRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getcustomer/{dto.Id}"), dto);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateCustomer(CustomerDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _customerRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteCustomer(int id)
        {
            await _customerRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
