import { Component } from '@angular/core';
import { book } from '../data-type';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent {
  bookList: book[] = []
  borrowedBooks: book[]=[]
  constructor(private book: BookService) { }

  ngOnInit(): void {
    // this.list();
    this.book.getAllBorrowedBooks().subscribe((result) => {
      this.borrowedBooks = result;
      console.log(result);
    })
    this.book.getAllLentBooks().subscribe((result) => {
     this.bookList=result;
      console.log(this.bookList);
    })
  }

  list() {
    this.book.getAllBorrowedBooks().subscribe((result) => {
      this.bookList = result;
      console.log(result);
    })
    this.book.getAllLentBooks().subscribe((result) => {
      this.bookList = [...this.bookList,...result]
      console.log(this.bookList);
    })

  }
}
