import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router'
import {RegisrationService} from '../regisration.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  mail = sessionStorage.getItem("email");
  phonenumber = sessionStorage.getItem("phonenumber");
  fullname = sessionStorage.getItem("fullname");
  surname = sessionStorage.getItem("surname");
  address = sessionStorage.getItem("address");
  primaryAccount = sessionStorage.getItem("primaryAccount");
  savingsAccount = sessionStorage.getItem("savingsAccount");

  viewuser: Observable<User>;

  constructor(private service1:RegisrationService, private router1: Router ) { }

  ngOnInit(): void {
  }

  
  viewuserpage()
  {
    console.log("view user page entered");
    this.viewuser=this.service1.viewpage();
  }


}
