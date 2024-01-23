import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLoginForm= new FormGroup({
    loginUsername:new FormControl('',[Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]+$')]),
    loginPassword:new FormControl('',[Validators.required,  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });
  get loginUsername(){
    return this.userLoginForm.get('username');
  }
  get loginPassword(){
    return this.userLoginForm.get('password');
  }
  authError: string = '';
  constructor(private UserService: UserService, private Router: Router){

  }
  login(data: any) {
    this.UserService.login(data.username, data.password).subscribe((result)=>{
      console.log(result);
      if(result.length==0){
        this.authError = "Enter valid user details";
      }
      else{
        this.authError = "Successful login";
        localStorage.setItem("username", result[0].userName)
        localStorage.setItem("tokens", String(result[0].tokensAvailable))
        this.Router.navigate(["/"])
      }
    })
}
logout(){
  localStorage.clear()
  this.Router.navigate(["/"])
}
}
