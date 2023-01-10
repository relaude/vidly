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
    public class GenreRepository : GenericRepository<Genre>
    {
        private readonly ApplicationDbContext _db;
        public GenreRepository(ApplicationDbContext context) : base(context)
        {
            _db = context;
        }

        public async Task<IEnumerable<GenreDto>> Genres()
        {
            var genreDb = await GetAll();
            return genreDb.Select(Mapper.Map<Genre, GenreDto>);
        }

        public async Task<GenreDto> Genre(int id)
        {
            Genre genre = await Get(id);
            return Mapper.Map<Genre, GenreDto>(genre);
        }

        public async Task<GenreDto> CreateGenre(GenreDto genreDto)
        {
            var genre = Mapper.Map<GenreDto, Genre>(genreDto);
            Add(genre);
            await _db.SaveChangesAsync();

            return Mapper.Map<Genre, GenreDto>(genre);
        }

        public async Task UpdateGenre(GenreDto genreDto)
        {
            var genreDb = await Get(genreDto.Id);
            Mapper.Map(genreDto, genreDb);

            await _db.SaveChangesAsync();
        }

        public async Task DeleteGenre(int id)
        {
            var genreDb = await Get(id);
            Remove(genreDb);

            await _db.SaveChangesAsync();
        }
    }
}