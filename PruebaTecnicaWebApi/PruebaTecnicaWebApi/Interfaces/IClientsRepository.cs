using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Interfaces
{
    public interface IClientsRepository
    {
        public Task<IEnumerable<ClientsListDTO>> GetClientsAsync();
        public Task<ClientsListDTO> CreateClientAsync(ClientCreateDTO companyCreateDTO);
        public Task<ClientsListDTO> UpdateClientAsync(ClientCreateDTO companyCreateDTO,int id);
        public Task DeleteClientAsync(int clientId);
    }
}
