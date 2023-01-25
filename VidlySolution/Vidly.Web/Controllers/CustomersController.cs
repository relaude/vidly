using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Vidly.Web.Models;
using Vidly.Web.Repositories;

namespace Vidly.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class CustomersController : Controller
    {
        private readonly ViewCustomerRepository _viewCustomerRepository;
        public CustomersController()
        {
            _viewCustomerRepository = new ViewCustomerRepository(new VidlyDBContext());
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ManageMembership() 
        {
            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }
    }
}