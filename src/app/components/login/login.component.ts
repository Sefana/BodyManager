import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  private loginForm: FormGroup;

  constructor(private userService: UserService ,private formBluilder: FormBuilder ,private router: Router) { 

    this.loginForm = formBluilder.group({
      mail: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  loginUser(){
    this.errorMessage = "";
    if(this.loginForm.invalid){
      this.errorMessage = "email ou mot de passe invalide";
      return;
    }
    this.userService.login(this.mail.value,this.password.value)
    .pipe()
    .subscribe(data=>{
      localStorage.setItem('CurrentUser', JSON.stringify(data));
      console.log(data);
      this.router.navigate(['home']);
    },error => {
    if(error.status === 404){
      this.errorMessage = "pas d'utilisateur avec les donner entrer"
    }
    if(error.status === 400){
      this.errorMessage = "pas d'utilisateur avec les donner entrer"
    }

    }
    );
  }

  get mail(){
    return this.loginForm.get('mail');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
