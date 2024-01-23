using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookApp.DAL.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Rating { get; set; }
        public string Author { get; set; }
        public string Genre { get; set; }
        public bool IsBookAvailable { get; set; }
        public string LentByUserId { get; set;}
        public string BorrowedByUserId { get; set; }
        public string Description { get; set; }
    }
}
