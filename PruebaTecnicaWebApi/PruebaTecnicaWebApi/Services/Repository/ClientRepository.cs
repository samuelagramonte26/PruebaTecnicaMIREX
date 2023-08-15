using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaWebApi.Data;
using PruebaTecnicaWebApi.Interfaces;
using PruebaTecnicaWebApi.Models;
using PruebaTecnicaWebApi.Models.DTOs;
using PruebaTecnicaWebApi.profile;

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


        public async Task<ClientsListDTO> CreateClientAsync(ClientCreateDTO clientCreateDTO)
        {
            var client = mapper.Map<Clients>(clientCreateDTO);

            context.Add(client);
            await context.SaveChangesAsync();
            var clientListDTO = mapper.Map<ClientsListDTO>(client);
            var company = context.Companies.FirstOrDefault(x => x.Id == clientCreateDTO.CompanyId);
            clientListDTO.Company = mapper.Map<CompanyListDTO>(company);

            //Registro en el historico de clientes
            HistoryCLients history = new();
            history.Action = Models.Action.Insert.GetDescription();
            history.Date = DateTime.Now;
            history.clientId = clientListDTO.Id;
            context.Add(history);

            await context.SaveChangesAsync();

            return clientListDTO;
        }

        public async Task DeleteClientAsync(int clientId)
        {
            var client =await context.Clients.FirstOrDefaultAsync(x => x.Id == clientId);
            if (client == null) throw new Exception("Cliente no encontrado");

            client.Active = false;
            
            await context.SaveChangesAsync();

            //Registro en el historico de clientes
            HistoryCLients history = new();
            history.Action = Models.Action.Delete.GetDescription();
            history.Date = DateTime.Now;
            history.clientId = clientId;
            context.Add(history);

            await context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ClientsListDTO>> GetClientsAsync()
        {
            var clientList = await context.Clients.Include(c => c.Company).Where(x => x.Active == true).ToListAsync();
            var clientListDTO = mapper.Map<IEnumerable<ClientsListDTO>>(clientList.AsEnumerable());
            return clientListDTO;
        }

        public async Task<ClientsListDTO> UpdateClientAsync(int id, ClientCreateDTO clientCreateDTO)
        {
            var client = await context.Clients.FirstOrDefaultAsync(x => x.Id == id);
            if (client == null) throw new Exception("Cliente no encontrado");

            client = mapper.Map(clientCreateDTO,client);//Mapear datos del DTO al modelo base
            await context.SaveChangesAsync();

            var company = context.Companies.FirstOrDefault(x => x.Id == clientCreateDTO.CompanyId);
            client.Company = company;


            //Registro en el historico de clientes
            HistoryCLients history = new();
            history.Action = Models.Action.Update.GetDescription();
            history.Date = DateTime.Now;
            history.clientId = client.Id;
            context.Add(history);

            await context.SaveChangesAsync();

            return mapper.Map<ClientsListDTO>(client);
           
        }
    }
}
