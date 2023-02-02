using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class ViewMovieRepository : GenericRepositoryAsync<ViewMovie, ViewMovieDto>
    {
        public ViewMovieRepository(VidlyDBContext context) : base(context)
        {

        }
    }
}