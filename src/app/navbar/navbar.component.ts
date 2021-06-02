import { Component, OnInit } from '@angular/core';
import {RegisrationService} from '../regisration.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:RegisrationService, private router: Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("fullname");
    sessionStorage.removeItem("surname");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("phonenumber");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("primaryAccount");
    sessionStorage.removeItem("savingsAccount");
    sessionStorage.removeItem("primaryBalance");
    sessionStorage.removeItem("savingsBalance");
    this.router.navigate(['login']);
  }

   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
