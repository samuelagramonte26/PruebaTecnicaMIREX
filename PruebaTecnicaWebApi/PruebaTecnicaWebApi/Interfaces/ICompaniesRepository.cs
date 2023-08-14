using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Interfaces
{
    public interface ICompaniesRepository
    {
        public Task<IEnumerable<CompanyListDTO>> GetCompaniesAsync();
        public Task<CompanyListDTO> CreateCompanyAsync(CompanyCreateDTO companyCreateDTO);
        public Task<CompanyListDTO> UpdateCompanyAsync(CompanyCreateDTO companyCreateDTO);
        public Task DeleteCompanyAsync(int companyId);
    }
}
