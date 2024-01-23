using BookApp.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BookApp.BLL.Interfaces
{
    public interface IBookService
    {
        Task<List<Book>> GetAllAvailableBooks();
        Task<Book> AddBook(Book book);
        Task<List<Book>> GetBooksByQuery(string query);
        Task<bool> BorrowBook(string username, int id);
        Task<List<Book>> BorrowedBooks(string username);
        Task<List<Book>> LentBooks(string username);
    }
}
