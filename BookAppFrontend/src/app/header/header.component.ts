import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { user } from '../data-type';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  constructor(private UserService: UserService, private Router: Router, private BookService: BookService){
  }
  search: string=""
  loginCheck(){
    if(localStorage.getItem('username')){
      return true;
    }
    return false;
  }
  isLoggedIn: boolean = this.loginCheck();
  
  getUserName(){
    return localStorage.getItem("username");
  }

  getTokens(){
    return localStorage.getItem("tokens");
  }

  // submit(){
  //   console.log(this.search);
  //   localStorage.setItem("searchQuery", this.search);
  // }

  // reset(){
  //   this.search="";
  //   console.log(this.search);
  //   localStorage.setItem("searchQuery", "");
  // }
  logout(){
    localStorage.clear();
  }
}
