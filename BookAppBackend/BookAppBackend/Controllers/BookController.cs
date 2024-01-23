using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookApp.DAL.Models;
using BookApp.DAL.Data;
using BookApp.BLL.Interfaces;
using BookApp.BLL;

namespace BookAppBackend.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BookController : Controller
    {
        private readonly BookService _bookService;
        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAvailableBooks()
        {
            var books = await _bookService.GetAllAvailableBooks();
            return Ok(books);
        }

        [HttpGet("search/{q}")]
        public async Task<IActionResult> GetBooksByQuery(string q)
        {
            var books = await _bookService.GetBooksByQuery(q);
            return Ok(books);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            var addedBook = await _bookService.AddBook(book);
            return Ok(addedBook);
        }

        [HttpGet("borrowBook")]
        public async Task<IActionResult> BorrowBook(string username, int id)
        {
            var borrowedBook = await _bookService.BorrowBook(username, id);
            return Ok(borrowedBook);
        }

        [HttpPost("borrowedBooks")]
        public async Task<IActionResult> BorrowedBooks([FromBody] List<string> username)
        {
            var borrowedBooks = await _bookService.BorrowedBooks(username[0]);
            return Ok(borrowedBooks);
        }

        [HttpGet("lentBooks")]
        public async Task<IActionResult> LentBooks(string username)
        {
            var lentBooks = await _bookService.LentBooks(username);
            return Ok(lentBooks);
        }
    }
}
