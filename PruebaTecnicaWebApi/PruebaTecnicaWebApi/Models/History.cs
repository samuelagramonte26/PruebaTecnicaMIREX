using System.ComponentModel;

namespace PruebaTecnicaWebApi.Models
{
    public class History
    {
        public int Id { get; set; }
        public string Action { get; set; }
        public DateTime Date { get; set; }
        public string UserID { get; set; } = Guid.NewGuid().ToString();


    }

    public enum Action
    {
        [Description("Insert")]
        Insert,
        [Description("Update")]
        Update,
        [Description("Delete")]
        Delete
    }
}
