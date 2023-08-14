using AutoMapper;
using PruebaTecnicaWebApi.Models;
using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Profiles
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ClientCreateDTO, Clients>();
            CreateMap<Clients, ClientsListDTO>();

            CreateMap<CompanyCreateDTO, Company>();
            CreateMap<Company, CompanyListDTO>();
        }
    }
}
