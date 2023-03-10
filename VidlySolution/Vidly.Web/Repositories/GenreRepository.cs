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
    public class GenreRepository : GenericRepositoryAsync<Genre, GenreDto>
    {
        private readonly VidlyDBContext _db;
        public GenreRepository(VidlyDBContext context) : base(context)
        {
            _db = context;
        }
    }
}