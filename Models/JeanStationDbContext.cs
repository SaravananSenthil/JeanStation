using JeanStation.Models;
using Microsoft.EntityFrameworkCore;

namespace JeanStation.Models
{
    public class JeanStationDbContext : DbContext
    {
        public JeanStationDbContext() { }
        public JeanStationDbContext(DbContextOptions<JeanStationDbContext> options) : base(options) { }
        public DbSet<User> users { get; set; }
        public DbSet<Admin> admins { get; set; }
        public DbSet<ProdcutDetails> details { get; set; }
        public DbSet<Cart> carts { get; set; }
        public DbSet<Order> orders { get; set; }
        public DbSet<Payment> payments { get; set; }
        public DbSet<Status> statuses { get; set; }
    }
}

