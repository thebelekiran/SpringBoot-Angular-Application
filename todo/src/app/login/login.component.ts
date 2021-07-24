import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'kiran'
  password = ''
  errorMessege = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
    private basicAuthenticationService : BasicAuthenticationService,
    private HardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  //Router -- dependency
  //Angular.giveMeRouter
  //Dependency Injection

  handleLogin(){
    //console.log(this.username);
    //if(this.username==='kiran' && this.password ==='1234'){
    if(this.HardcodedAuthenticationService.authenticate(this.username,this.password)){
      //redirect to welcome page.
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else
      this.invalidLogin = true  
  }
  
  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data =>{
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error =>{
          console.log(error);
          this.invalidLogin = true 
        }
      )
  }

  handleJWTBasicAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data =>{
          console.log(data);
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error =>{
          console.log(error);
          this.invalidLogin = true 
        }
      )
  }

}
