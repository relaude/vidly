using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Web.Dtos;
using Vidly.Web.Models;

namespace Vidly.Web.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<Genre, GenreDto>();
            Mapper.CreateMap<GenreDto, Genre>()
                .ForMember(c => c.Id, opt => opt.Ignore());

            Mapper.CreateMap<Movie, MovieDto>();
            Mapper.CreateMap<MovieDto, Movie>()
                .ForMember(c => c.Id, opt => opt.Ignore());

            Mapper.CreateMap<Membership, MembershipDto>();
            Mapper.CreateMap<MembershipDto, Membership>()
                .ForMember(c => c.Id, opt => opt.Ignore());

            Mapper.CreateMap<Customer, CustomerDto>();
            Mapper.CreateMap<CustomerDto, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore());

            Mapper.CreateMap<Rental, RentalDto>();
            Mapper.CreateMap<RentalDto, Rental>()
                .ForMember(c => c.Id, opt => opt.Ignore());

            Mapper.CreateMap<CustomerRental, CustomerRentalDto>();
            Mapper.CreateMap<CustomerRentalDto, CustomerRental>()
                .ForMember(c => c.Id, opt => opt.Ignore());
        }
    }
}