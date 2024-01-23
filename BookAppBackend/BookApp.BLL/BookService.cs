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
    public class BookService
    {
        private readonly DataContext _dataContext;

        public BookService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        //public async Task<List<Book>> GetAllBooks()
        //{
        //    var books = await _dataContext.Books.ToListAsync();
        //    return books;
        //}

        public async Task<List<Book>> GetAllAvailableBooks()
        {
            var availableBooks = await _dataContext.Books
                .Where(book => book.IsBookAvailable)
                .ToListAsync();

            return availableBooks;
        }


        public async Task<Book> AddBook(Book book)
        {
            await _dataContext.Books.AddAsync(book);
            await _dataContext.SaveChangesAsync();
            return book;
        }

        public async Task<bool> BorrowBook(string username, int id)
        {
            if(username==null || id==null) return false;
            try
            {
                var user = await _dataContext.Users
                .Where(u=>u.UserName==username)
                .FirstOrDefaultAsync();
                if (user != null)
                {
                    if (user.TokensAvailable >= 1)
                    {
                        user.TokensAvailable--;
                        var bookDesc = await _dataContext.Books
                            .Where(i => i.Id == id)
                            .FirstOrDefaultAsync();

                        var bookOwner = await _dataContext.Users
                            .Where(u=>u.UserName==bookDesc.LentByUserId)
                            .FirstOrDefaultAsync();

                        if (bookDesc != null)
                        {
                            bookOwner.TokensAvailable++;
                            bookDesc.BorrowedByUserId = username;
                            bookDesc.IsBookAvailable = false;
                            _dataContext.Books.Update(bookDesc);
                            _dataContext.Users.Update(bookOwner);
                            _dataContext.Users.Update(user);
                            await _dataContext.SaveChangesAsync();
                            return true;
                        }
                    }
                }
                return false;
            }
            catch { return false; }
        }
        public async Task<List<Book>> GetBooksByQuery(string query)
        {
            var matchingBooks = await _dataContext.Books
                .Where(b =>
                    b.Name.Contains(query) ||
                    b.Author.Contains(query) ||
                    b.Genre.Contains(query))
                .ToListAsync();

            return matchingBooks;
        }
        public async Task<List<Book>> BorrowedBooks(string username)
        {
            var borrowedBooks = await _dataContext.Books
                .Where(book=>book.BorrowedByUserId==username)
                .ToListAsync();

            return borrowedBooks;
        }
        public async Task<List<Book>> LentBooks(string username)
        {
            var lentBooks = await _dataContext.Books
                .Where(book => book.LentByUserId == username)
                .ToListAsync();

            return lentBooks;
        }

    }
}
