import { Component } from '@angular/core';
import { book } from '../data-type';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // bookList: undefined | book[]
  bookList: book[] = []
  search: string=""
  bookIndex: number=0;
  constructor(private book: BookService, private router: Router) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.book.getAllAvailableBooks().subscribe((result) => {
      this.bookList = result;
      console.log(this.bookList);
    })
  }

  borrowBook(id: number){
    var token=Number(localStorage.getItem("tokens"))
    if(token<1){
      alert("Unable to borrow due to isufficient tokens")
      return ;
    }
    if(localStorage.getItem("username")==this.bookList[id].lentByUserId){
      alert("User cannot buy their own books");
      return;
    }
    this.book.getBorrowBooks(this.bookList[id].id).subscribe( (result)=>{
      if(result){
        localStorage.setItem("tokens", String(token-1));
        alert("Borrowed Sucessfully");
        this.router.navigate(["user-history"]);
      }
      else{
        alert("Some error occured")
      }
    })
  }

  submit(){
    console.log(this.search);
    this.bookList=this.bookList.filter(x=>x.name.toLowerCase().includes(this.search) ||
    x.author.toLowerCase().includes(this.search) ||
    x.genre.toLowerCase().includes(this.search))
  }

  reset(){
    this.search="";
    this.ngOnInit()
  }

  setIndex(data: number){
    this.bookIndex=data;
  }

  loginCheck(){
    if(localStorage.getItem('username')){
      return true;
    }
    return false;
  }
}
