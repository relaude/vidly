using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Web.Http;
using Vidly.Web.Dtos;
using Vidly.Web.Models;
using Vidly.Web.Repositories;

namespace Vidly.Web.Api
{
    //[Authorize]
    public class CustomerController : ApiController
    {
        private readonly CustomerRepository _customerRepository;
        private readonly ViewCustomerRepository _viewCustomerRepository;
        public CustomerController()
        {
            _customerRepository = new CustomerRepository(new VidlyDBContext());
            _viewCustomerRepository= new ViewCustomerRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<PaginatedViewCustomerDto> PaginatedCustomers(int pageIndex, int pageSize, string search = null)
        {
            var paginatedResults = new PaginatedViewCustomerDto();
            int totalrows = 0;

            if (string.IsNullOrEmpty(search))
            {
                var result = await Task.Run(()=> _viewCustomerRepository.Paginated(pageIndex, pageSize, 
                    i => i.DisplayName, out totalrows));

                paginatedResults.TotalRows= totalrows;
                paginatedResults.Results = result;
            }

            if (!string.IsNullOrEmpty(search))
            {
                var result = await Task.Run(() => _viewCustomerRepository.Paginated(pageIndex, pageSize, 
                    i => i.DisplayName.Contains(search), 
                    i=> i.DisplayName, 
                    out totalrows));

                paginatedResults.TotalRows = totalrows;
                paginatedResults.Results = result;
            }

            return paginatedResults;
        }

        [HttpGet]
        public async Task<IEnumerable<ViewCustomer>> GetCustomers(string query=null)
        {
            return await _customerRepository.GetViewCustomers(query);
        }

        [HttpGet]
        public async Task<ApiGetResultsDto> GetCustomers(int page, int limit)
        {
            var paginatedResults = new PaginatedViewCustomerDto();
            var apiResults = new ApiGetResultsDto();
            int totalrows = 0;

            var result = await Task.Run(() => _viewCustomerRepository.Paginated(page, limit,
                    i => i.DisplayName, out totalrows));

            paginatedResults.TotalRows = totalrows;
            paginatedResults.Results = result;

            apiResults.Results = totalrows;
            apiResults.Items = paginatedResults.Results;

            return apiResults;
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
