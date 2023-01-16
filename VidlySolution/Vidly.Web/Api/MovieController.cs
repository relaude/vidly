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
    public class MovieController : ApiController
    {
        private readonly MovieRepository _movieRepository;
        public MovieController()
        {
            _movieRepository = new MovieRepository(new VidlyDBContext());
        }

        [HttpGet]
        public async Task<IEnumerable<MovieDto>> GetMovies()
        {
            return await _movieRepository.GetListAsync();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMovie(int id)
        {
            var result = await _movieRepository.GetByIdAsync(id);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> CreateMovie(MovieDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var result = await _movieRepository.CreateAsync(dto);

            return Created(new Uri($"{Request.RequestUri}/getmovie/{dto.Id}"), dto);
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateMovie(MovieDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            await _movieRepository.UpdateAsync(dto, dto.Id);

            return Ok();
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteMovie(int id)
        {
            await _movieRepository.DeleteAsync(id);

            return Ok();
        }
    }
}
