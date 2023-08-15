using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Interfaces
{
    public interface ICompanyRepository
    {
        public Task<IEnumerable<CompanyListDTO>> GetCompaniesAsync();
        public Task<CompanyListDTO> CreateCompanyAsync(CompanyCreateDTO companyCreateDTO);
        public Task<CompanyListDTO> UpdateCompanyAsync(int id, CompanyCreateDTO companyCreateDTO);
        public Task DeleteCompanyAsync(int companyId);
    }
}
