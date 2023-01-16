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
    //[Authorize(Roles="Admin")]
    public class GenreController : ApiController
    {
        private readonly GenreRepository _genreRepository;
        public GenreController()
        {
            _genreRepository = new GenreRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<GenreDto>> GetGenres()
        {
            return await _genreRepository.GetListAsync();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetGenre(int id)
        {
            var result = await _genreRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateGenre(GenreDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _genreRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getgenre/{result.Id}"), result);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateGenre(GenreDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _genreRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteGenre(int id)
        {
            await _genreRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
