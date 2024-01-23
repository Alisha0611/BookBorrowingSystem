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
    public class UserLoginService
    {
        private readonly DataContext _dataContext;

        public UserLoginService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<User> UserLogin(string username, string password)
        {
            var loggedInUsers = await _dataContext.Users
                .Where(u => u.UserName == username && u.Password == password)
                .FirstOrDefaultAsync();

            return loggedInUsers;
        }
    }
}
