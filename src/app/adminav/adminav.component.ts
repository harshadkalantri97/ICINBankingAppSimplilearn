import { Component, OnInit } from '@angular/core';
import {RegisrationService} from '../regisration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminav',
  templateUrl: './adminav.component.html',
  styleUrls: ['./adminav.component.css']
})
export class AdminavComponent implements OnInit {

  constructor(public loginService:RegisrationService, private router: Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
    sessionStorage.removeItem("email");
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