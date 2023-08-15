using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Controllers
{
    [ApiController]
    [Route("api/client")]
    public class ClientsController : ControllerBase
    {
        public ClientsController(IClientsRepository clientsRepository)
        {
            ClientsRepository = clientsRepository;
        }

        public IClientsRepository ClientsRepository { get; }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientsListDTO>>> GetAsync()
        {
            try
            {
                return Ok(await ClientsRepository.GetClientsAsync());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ClientsListDTO>> PostAsync([FromBody] ClientCreateDTO clientCreateDTO)
        {
            try
            {
                return await ClientsRepository.CreateClientAsync(clientCreateDTO);
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
                await ClientsRepository.DeleteClientAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult<ClientsListDTO>> PutAsync(int id, [FromBody] ClientCreateDTO clientCreateDTO)
        {
            try
            {
                return await ClientsRepository.UpdateClientAsync(id, clientCreateDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}