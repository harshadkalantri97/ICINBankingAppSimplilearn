import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {RegisrationService} from '../regisration.service';
import { User } from '../user';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';


  constructor(private service1:RegisrationService, private router1: Router ) { }

  ngOnInit(): void {
  }

  loginUser()
  {
  
    this.service1.loginUserRemote(this.user).subscribe(
      response => {
        console.log(response);
        // sessionStorage.setItem("email",JSON.stringify(this.user.mailid));
        // sessionStorage.setItem("fullname",JSON.stringify(this.user.fullname));
        sessionStorage.setItem("id", response["id"]);
        sessionStorage.setItem("fullname", response["fullname"]);
        sessionStorage.setItem("surname", response["surname"]);
        sessionStorage.setItem("email", response["mailid"]);
        sessionStorage.setItem("phonenumber", response["phonenumber"]);
        sessionStorage.setItem("address", response['address'])
        sessionStorage.setItem("primaryAccount",response['primaryAccount']['accountNumber']);
        sessionStorage.setItem("savingsAccount",response['savingsAccount']['accountNumber']);
        sessionStorage.setItem("primaryBalance", response['primaryAccount']['accountBalance']);
        sessionStorage.setItem("savingsBalance", response['savingsAccount']['accountBalance']);
        // sessionStorage.setItem("primaryAccount",JSON.stringify(this.user.primaryAccount.accountNumber));

        
        
        this.router1.navigate(['/myprofile']);
        // sessionStorage.removeItem("email");
      },
      error =>{ 
        console.log("exception occured");
        this.msg = "Bad Credentials, Please enter valid maiid and password";
      }
    )
  }

  Registerpage()
  {
      // this.routes.navigate()
  }

}
