using System.ComponentModel.DataAnnotations;

namespace PruebaTecnicaWebApi.Models.DTOs
{
    public class CompanyCreateDTO
    {
        [Required(ErrorMessage ="El campo nombre es requerido")]
        public string Name { get; set; }
        [Required(ErrorMessage = "El campo direccion es requerido")]
        public string Address { get; set; }
        [Required(ErrorMessage = "El campo telefono es requerido")]
        public string Phone { get; set; }
        [Required(ErrorMessage = "El campo RNC es requerido")]
        public string RNC { get; set; }
       
    }
}
