using BookApp.DAL.Data;
using BookApp.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookApp.BLL
{
    public class UserService 
    {
        private readonly DataContext _dataContext;

        public UserService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<User>> GetSpecificUsers(string username, string password)
        {
            try
            {
                var users = await _dataContext.Users
                    .Where(u => u.UserName == username && u.Password == password)
                    .ToListAsync();

                return users;
            }
            catch (Exception ex)
            {
                throw new ApplicationException("Invalid credentials. Please check your username and password.", ex);
            }
        }
    }
}
