using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BookApp.DAL.Models;

namespace BookApp.DAL.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed initial data
            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Name = "User1", UserName = "username1", Password = "Password@1", TokensAvailable = 5 },
                new User { Id = 2, Name = "User2", UserName = "username2", Password = "Password@2", TokensAvailable = 5 },
                new User { Id = 3, Name = "User3", UserName = "username3", Password = "Password@3", TokensAvailable = 5 },
                new User { Id = 4, Name = "User4", UserName = "username4", Password = "Password@4", TokensAvailable = 5 }
            );
        }
    }
}
