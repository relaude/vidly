using AutoMapper;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class MovieRepository : GenericRepositoryAsync<Movie, MovieDto>
    {
        private readonly VidlyDBContext _db;
        public MovieRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }

        public async Task<IEnumerable<ViewMovie>> GetViewMovies()
        {
            return await _db.ViewMovie.ToListAsync();
        }
    }
}