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
    [Authorize(Roles = "Admin")]
    public class MembershipController : ApiController
    {
        private readonly MembershipRepository _membershipRepository;
        public MembershipController()
        {
            _membershipRepository = new MembershipRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<MembershipDto>> GetMemberships()
        {
            var result = await _membershipRepository.GetListAsync();
            return result.OrderBy(i => i.Name);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMembership(int id)
        {
            var result = await _membershipRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateMembership(MembershipDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _membershipRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getmembership/{dto.Id}"), dto);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateMembership(MembershipDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _membershipRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteMembership(int id)
        {
            await _membershipRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
