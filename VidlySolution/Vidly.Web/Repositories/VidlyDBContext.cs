using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Vidly.Web.Models;

namespace Vidly.Web.Repositories
{
    public class VidlyDBContext : DbContext
    {
        public VidlyDBContext() : base("DefaultConnection")
        {

        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Membership> Memberships { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<CustomerRental> CustomerRentals { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Genre>()
                .Property(g => g.Name)
                .IsRequired()
                .HasMaxLength(50);
        }
    }
}