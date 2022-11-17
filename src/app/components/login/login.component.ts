import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormIsValid = true;
  @ViewChild("invalidMessage") invalidMessage: HTMLParagraphElement | undefined;

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })



  constructor(private auth: AuthService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      this.loginFormIsValid = false;
      this.loginForm.reset();
      return;
    }

    let logInModel = {
      email : this.loginForm.controls["email"].value,
      password : this.loginForm.controls["password"].value
    }


    Swal.fire({
      title: 'Loading...',
      text: 'Your request is being processed',
      showConfirmButton: false
    })


    this.auth.logIn(logInModel)
        .subscribe(
          res => {
            localStorage.setItem('token', res.token)
            setTimeout(function(){
              Swal.close()},2000);
              this.loginForm.reset();
          },
          err => {
            setTimeout(function(){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Something went wrong! Error: ${err.message}`
              })},2000);
              this.loginForm.reset();
          }
           
      );


  }

}
