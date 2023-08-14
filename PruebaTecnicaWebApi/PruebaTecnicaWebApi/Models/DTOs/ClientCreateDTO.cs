using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaWebApi.Models.DTOs
{
    public class ClientCreateDTO
    {
        [Required(ErrorMessage = "El campo nombre es requerido")]
        public string Name { get; set; }

        [Required(ErrorMessage = "El campo cedula es requerido")]
        public string Identification{ get; set; }

        [Required(ErrorMessage = "El campo direccion es requerido")]
        public string Address { get; set; }

        [Required(ErrorMessage = "El campo empresa es requerido")]
        public int CompanyId { get; set; }
    }
}
