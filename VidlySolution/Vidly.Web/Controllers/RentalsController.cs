using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web;
using System.Web.Mvc;
using Vidly.Web.Repositories;

namespace Vidly.Web.Controllers
{
    [Authorize]
    public class RentalsController : Controller
    {
        private readonly VidlyDBContext _db;
        public RentalsController()
        {
            _db= new VidlyDBContext();
        }    
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details(int id)
        {
            var model = _db.ViewRentals.Find(id);
            return View(model);
        }
    }
}