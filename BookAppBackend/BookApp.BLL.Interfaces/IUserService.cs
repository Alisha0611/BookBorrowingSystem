using BookApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookApp.BLL.Interfaces
{
    public interface IUserService
    {
        Task<List<User>> GetSpecificUsers(string username, string password);
        
    }
}
