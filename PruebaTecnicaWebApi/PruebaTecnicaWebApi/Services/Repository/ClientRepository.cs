using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaWebApi.Data;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Models;
using PruebaTecnicaWebApi.Models.DTOs;

namespace PruebaTecnicaWebApi.Services.Repository
{
    public class ClientRepository : IClientsRepository
    {
        private readonly AppDbContext context;
        private IMapper mapper { get; }

        public ClientRepository(AppDbContext _context, IMapper _mapper)
        {
            context = _context;
            mapper = _mapper;
        }


        public async Task<ClientsListDTO> CreateClientAsync(ClientCreateDTO companyCreateDTO)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteClientAsync(int clientId)
        {
            var client =await context.Clients.FirstOrDefaultAsync(x => x.Id == clientId);
            if (client == null) throw new Exception("Cliente no encontrado");

            client.Active = false;
            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ClientsListDTO>> GetClientsAsync()
        {
            var clientList = await context.Clients.ToListAsync();
            var clientListDTO = mapper.Map<IEnumerable<ClientsListDTO>>(clientList.AsEnumerable());
            return clientListDTO;
        }

        public async Task<ClientsListDTO> UpdateClientAsync(ClientCreateDTO clientCreateDTO,int id)
        {
            var client = await context.Clients.FirstOrDefaultAsync(x => x.Id == id);
            if (client == null) throw new Exception("Cliente no encontrado");

            client = mapper.Map(clientCreateDTO,client);
            await context.SaveChangesAsync();

            return mapper.Map<ClientsListDTO>(client);
           
        }
    }
}
