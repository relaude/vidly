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
    [Authorize(Roles="Admin")]
    public class GenreController : ApiController
    {
        private readonly GenreRepository _genreRepository;
        public GenreController()
        {
            _genreRepository = new GenreRepository();
        }

        [HttpGet]
        public async Task<IEnumerable<GenreDto>> GetGenres()
        {
            return await Task.Run(()=> _genreRepository.Genres());
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetGenre(int id)
        {
            var genre = await _genreRepository.Genre(id);

            if (genre == null)
                return NotFound();

            return Ok(genre);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateGenre(GenreDto genreDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var genre = await _genreRepository.CreateGenre(genreDto);

            return Created(new Uri($"{Request.RequestUri}/getgenre/{genre.Id}"), genre);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateGenre(GenreDto genreDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _genreRepository.UpdateGenre(genreDto);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteGenre(int id)
        {
            await _genreRepository.DeleteGenre(id);

            return Ok();
        }
    }
}
