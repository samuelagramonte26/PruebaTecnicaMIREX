namespace PruebaTecnicaWebApi.Models.DTOs
{
    public class CompanyListDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string RNC { get; set; }
        public List<Clients> Clients { get; set; }
    }
}
