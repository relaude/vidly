using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Vidly.Web.Repositories;

namespace Vidly.Web.Controllers
{
    [Authorize(Roles ="Admin")]
    public class MoviesController : Controller
    {
        private readonly GenreRepository _genreRepository;
        public MoviesController()
        {
            _genreRepository = new GenreRepository(new VidlyDBContext());
        }
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> ManageGenre() 
        {
            var model = await _genreRepository.GetListAsync();
            return View(model);
        }
    }
}