using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaWebApi.Models.DTOs
{
    public class ClientsListDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Identification{ get; set; }
        public string Address { get; set; }
        public int CompanyId { get; set; }
        public CompanyListDTO Company { get; set; }
    }
}
