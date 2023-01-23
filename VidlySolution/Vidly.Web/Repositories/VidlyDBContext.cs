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
        public DbSet<Rental> Rentals { get; set; }

        public DbSet<ViewMovie> ViewMovies { get; set; }
        public DbSet<ViewCustomer> ViewCustomers { get; set; }
        public DbSet<ViewRental> ViewRentals { get; set; }
        public DbSet<ViewCustomerRental> ViewCustomerRentals { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Map entity to table
            modelBuilder.Entity<Customer>().ToTable("Customers");
            modelBuilder.Entity<Movie>().ToTable("Movies");
            modelBuilder.Entity<Membership>().ToTable("Memberships");
            modelBuilder.Entity<Genre>().ToTable("Genres");
            modelBuilder.Entity<CustomerRental>().ToTable("CustomerRentals");
            modelBuilder.Entity<Rental>().ToTable("Rentals");

            //Configure primary key
            modelBuilder.Entity<Customer>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Movie>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Membership>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Genre>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<CustomerRental>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Rental>().HasKey<int>(i => i.Id).HasTableAnnotation("DatabaseGenerated", DatabaseGeneratedOption.Identity);

            //Configure Column Customer
            modelBuilder.Entity<Customer>()
                .Property(i => i.FirstName)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<Customer>()
                .Property(i => i.LastName)
                .IsRequired()
                .HasMaxLength(200);

            modelBuilder.Entity<Customer>()
                .Property(i => i.DateOfBirth)
                .IsRequired();

            modelBuilder.Entity<Customer>()
                .Property(i => i.Membership_Id)
                .IsRequired();

            //Configure Column Movie
            modelBuilder.Entity<Movie>()
                .Property(i => i.Name)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Movie>()
                .Property(i => i.Genre_Id)
                .IsRequired();

            modelBuilder.Entity<Movie>()
                .Property(i => i.RentFee)
                .IsRequired()
                .HasColumnType("decimal")
                .HasPrecision(18, 2);

            modelBuilder.Entity<Movie>()
                .Property(i => i.Stock)
                .IsRequired();

            //Configure Column Membership
            modelBuilder.Entity<Membership>()
                .Property(i => i.Name)
                .IsRequired()
                .HasMaxLength(50);

            modelBuilder.Entity<Membership>()
                .Property(i => i.DiscountRate)
                .IsRequired()
                .HasColumnType("decimal")
                .HasPrecision(18, 2);

            //Configure Column Genre
            modelBuilder.Entity<Genre>()
                .Property(i => i.Name)
                .IsRequired()
                .HasMaxLength(50);

            //Configure Column CustomerRental
            modelBuilder.Entity<CustomerRental>()
                .Property(i => i.Rental_Id)
                .IsRequired();

            modelBuilder.Entity<CustomerRental>()
               .Property(i => i.Movie_Id)
               .IsRequired();

            modelBuilder.Entity<CustomerRental>()
               .Property(i => i.RentFee)
               .IsRequired();

            modelBuilder.Entity<CustomerRental>()
               .Property(i => i.DateRented)
               .IsRequired();

            //Configure Column Rental
            modelBuilder.Entity<Rental>()
                .Property(i => i.Customer_Id)
                .IsRequired();

            //Configure Null Column
            modelBuilder.Entity<CustomerRental>()
               .Property(i => i.DateRented)
               .IsOptional();

            //VIEWS
            modelBuilder.Entity<ViewMovie>().ToTable("ViewMovies");
            modelBuilder.Entity<ViewCustomer>().ToTable("ViewCustomers");
            modelBuilder.Entity<ViewRental>().ToTable("ViewRentals");
            modelBuilder.Entity<ViewCustomerRental>().ToTable("ViewCustomerRentals");

            /* map a property in your model to a different column name in the database
             modelBuilder.Entity<Sample>()
                .Property(s => s.sampleId)
                .HasColumnName("oldNameId");

             */
        }
    }
}