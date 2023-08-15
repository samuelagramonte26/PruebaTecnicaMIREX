using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaWebApi.Data;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Models;
using PruebaTecnicaWebApi.Models.DTOs;
using PruebaTecnicaWebApi.profile;

namespace PruebaTecnicaWebApi.Services.Repository
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly AppDbContext context;
        private IMapper mapper { get; }

        public CompanyRepository(AppDbContext _context, IMapper _mapper)
        {
            context = _context;
            mapper = _mapper;
        }


        public async Task<CompanyListDTO> CreateCompanyAsync(CompanyCreateDTO companyCreateDTO)
        {
           
            var company = mapper.Map<Company>(companyCreateDTO);

            context.Add(company);
            await context.SaveChangesAsync();
            var companyListDTO = mapper.Map<CompanyListDTO>(company);

            //Registro en el historico de empresas
            HistoryCompany history = new();
            history.Action = Models.Action.Insert.GetDescription();
            history.Date = DateTime.Now;
            history.companyId = companyListDTO.Id;
            context.Add(history);

            await context.SaveChangesAsync();

            return companyListDTO;
        }

        public async Task DeleteCompanyAsync(int companyId)
        {
             var company =await context.Companies.FirstOrDefaultAsync(x => x.Id == companyId);
            if (company == null) throw new Exception("Cliente no encontrado");

            company.Active = false;
            
            await context.SaveChangesAsync();

            //Registro en el historico de empresas
            HistoryCompany history = new();
            history.Action = Models.Action.Delete.GetDescription();
            history.Date = DateTime.Now;
            history.companyId = companyId;
            context.Add(history);

            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<CompanyListDTO>> GetCompaniesAsync()
        {
           var companiesList = await context.Companies.Include(c => c.Clients).Where(x => x.Active == true).ToListAsync();
            var companiesListDTO = mapper.Map<IEnumerable<CompanyListDTO>>(companiesList.AsEnumerable());
            return companiesListDTO;
        }

        public async Task<CompanyListDTO> UpdateCompanyAsync(int id, CompanyCreateDTO companyCreateDTO)
        {
            var company = await context.Companies.FirstOrDefaultAsync(x => x.Id == id);
            if (company == null) throw new Exception("Cliente no encontrado");

            company = mapper.Map(companyCreateDTO,company);
            await context.SaveChangesAsync();

            //Registro en el historico de empresas
            HistoryCompany history = new();
            history.Action = Models.Action.Update.GetDescription();
            history.Date = DateTime.Now;
            history.companyId = company.Id;
            context.Add(history);

            await context.SaveChangesAsync();

            return mapper.Map<CompanyListDTO>(company);
           
        }
    }
}