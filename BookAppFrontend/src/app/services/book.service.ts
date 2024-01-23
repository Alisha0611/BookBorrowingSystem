import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchQuery: string="";
  constructor(private Http:HttpClient) { }
  getAllAvailableBooks(): Observable<any>{
    return this.Http.get<any>("https://localhost:7263/api/books");
  }
  addBook(data: book){
    return this.Http.post('https://localhost:7263/api/books', data);
  }
  getAllBorrowedBooks(): Observable<any>{
    return this.Http.post<any>("https://localhost:7263/api/books/borrowedBooks", [this.getUsername()]);
  }
  getAllLentBooks(): Observable<any>{
    return this.Http.get<any>(`https://localhost:7263/api/books/lentBooks?username=${this.getUsername()}`);
  }
  getBorrowBooks(id:number): Observable<any>{
    return this.Http.get<any>(`https://localhost:7263/api/books/borrowBook?username=${this.getUsername()}&id=${id}`);
  }
  getUsername(){
    if(localStorage.getItem("username")){
      return localStorage.getItem("username");
    }
    else{
      return "";
    }
  }
}
