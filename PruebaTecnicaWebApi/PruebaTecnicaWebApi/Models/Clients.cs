using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaWebApi.Models
{
    public class Clients
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Identification { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public int CompanyId { get; set; }
        public Company Company { get; set; }
        public bool Active { get; set; } = true;
    }
}
