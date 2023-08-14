namespace PruebaTecnicaWebApi.Models
{
    public class History
    {
        public int Id { get; set; }
        public string EntityName { get; set; }
        public Action Action { get; set; }
        public int RecordId { get; set; }
        public DateTime Date { get; set; }
        public string UserID { get; set; }


    }

    public enum Action
    {
        Insert,
        Update,
        Delete
    }
}
