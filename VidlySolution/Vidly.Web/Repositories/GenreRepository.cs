using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class GenreRepository
    {
        private readonly VidlyDBContext _db;
        public GenreRepository()
        {
            _db = new VidlyDBContext();
        }

        public IEnumerable<GenreDto> Genres()
        {
            var genreDb = _db.Genres.ToList();
            return genreDb.Select(Mapper.Map<Genre, GenreDto>);
        }

        public async Task<GenreDto> Genre(int id)
        {
            Genre genre = await _db.Genres.FindAsync(id);
            return Mapper.Map<Genre, GenreDto>(genre);
        }

        public async Task<GenreDto> CreateGenre(GenreDto genreDto)
        {
            var genre = Mapper.Map<GenreDto, Genre>(genreDto);

            _db.Set<Genre>().Add(genre);
            await _db.SaveChangesAsync();

            return Mapper.Map<Genre, GenreDto>(genre);
        }

        public async Task UpdateGenre(GenreDto genreDto)
        {
            var genreDb = await _db.Genres.FindAsync(genreDto.Id);
            Mapper.Map(genreDto, genreDb);

            await _db.SaveChangesAsync();
        }

        public async Task DeleteGenre(int id)
        {
            var genreDb = await _db.Genres.FindAsync(id);
            _db.Set<Genre>().Remove(genreDb);

            await _db.SaveChangesAsync();
        }
    }
}