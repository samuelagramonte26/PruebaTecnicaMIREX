using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaWebApi.Models
{
    public class Company
    {
        public int  Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string RNC { get; set; }
        public bool Active { get; set; } = true;
        public List<Clients> Clients { get; set; }

    }
}
