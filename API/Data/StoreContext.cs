using System;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Entities.Product> Products { get; set; }
    }
}