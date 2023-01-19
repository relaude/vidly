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
        public MoviesController()
        {

        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ManageGenre() 
        {
            return View();
        }
    }
}