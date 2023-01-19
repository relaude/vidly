﻿using AutoMapper;
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

        public async Task<IEnumerable<ViewMovie>> GetViewMovies(string query = null)
        {
            if (!string.IsNullOrWhiteSpace(query))
            {
                return await _db.ViewMovies
                    .Where(i=>i.Movie.Contains(query))
                    .ToListAsync();
            }

            return await _db.ViewMovies.OrderBy(i => i.Movie).ToListAsync();
        }
    }
}