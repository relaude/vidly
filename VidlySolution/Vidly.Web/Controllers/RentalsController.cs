using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Vidly.Web.Controllers
{
    public class RentalsController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }
    }
}