using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Web.Repositories;

namespace Vidly.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class CustomersController : Controller
    {
        public CustomersController()
        {

        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ManageMembership() 
        {
            return View();
        }
    }
}