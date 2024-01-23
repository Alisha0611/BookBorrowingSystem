import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { book } from '../data-type';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  addForm= new FormGroup({
    name:new FormControl('',[Validators.required, Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9 ]+$') ]),
    rating:new FormControl('',[Validators.required, Validators.pattern(/^(\d(\.\d{0,1})?|\.?\d{1})$/),Validators.min(0),
    Validators.max(5),]),
    author:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]),
    genre:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]),
    description:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]+$')]),
    // image:new FormControl('',[Validators.required])
  })
  router: any;
  get name(){
    return this.addForm.get('name');
  }
  get rating(){
    return this.addForm.get('rating');
  }
  get author(){
    return this.addForm.get('author');
  }
  get genre(){
    return this.addForm.get('genre');
  }
  get description(){
    return this.addForm.get('description');
  }
  // get image(){
  //   return this.addForm.get('image');
  // }
  addBookMessage: string | undefined;
  constructor(private book: BookService, private Router: Router){
  }
  ngOnInit(): void {
  }
  
  submit(data: book, form:any){
    console.log(data);
    data.isBookAvailable=true;
    var lentBy=localStorage.getItem("username");
    if(lentBy==null){
      lentBy=""
    }
    data.lentByUserId=lentBy;
    data.borrowedByUserId="";
    console.log(data)
    this.book.addBook(data).subscribe((result)=>{
      console.log(result);
      if (result) {
        this.addBookMessage = "Book is succesfully added";
      }
      else {
        this.addBookMessage = "Unable to add book";
      }
      form.resetForm();
      //setTimeout(() => this.addProductMessage = undefined, 2000);
      setTimeout(() => {
        this.addBookMessage = undefined;
      }, 1000);
      if(result){
        this.Router.navigate(['/']);
      }
    });

  }
}
