using Microsoft.EntityFrameworkCore;
using PruebaTecnicaWebApi.Models;

namespace PruebaTecnicaWebApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Clients> Clients { get; set; }
        public DbSet<History> History { get; set; }
    }
}
