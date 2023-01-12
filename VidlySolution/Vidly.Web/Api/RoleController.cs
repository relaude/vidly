using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Vidly.Web.Models;

namespace Vidly.Web.Api
{
    public class RoleController : ApiController
    {
        public RoleController()
        {

        }

        [HttpGet]
        public async Task<string> CreateRole(string role)
        {
            var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
            var roleManager = new RoleManager<IdentityRole>(roleStore);

            var newRole = new IdentityRole(role);
            await roleManager.CreateAsync(newRole);

            return newRole.Id;
        }
    }
}
