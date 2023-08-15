using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Controllers
{
    [Route("api/company")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        public CompanyController(ICompanyRepository companyRepository)
        {
            CompanyRepository = companyRepository;
        }

        public ICompanyRepository CompanyRepository { get; }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyListDTO>>> Get()
        {
            try
            {
                var list = await CompanyRepository.GetCompaniesAsync();
                return Ok(list);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public async Task<ActionResult<CompanyListDTO>> PostAsync([FromBody] CompanyCreateDTO companyCreateDTO)
        {
            try
            {
                return await CompanyRepository.CreateCompanyAsync(companyCreateDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteAsync(int id)
        {
            try
            {
                await CompanyRepository.DeleteCompanyAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult<CompanyListDTO>> PutAsync(int id, [FromBody] CompanyCreateDTO companyCreateDTO)
        {
            try
            {
                return await CompanyRepository.UpdateCompanyAsync(id, companyCreateDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}