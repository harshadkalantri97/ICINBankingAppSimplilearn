import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import {RegisrationService} from '../regisration.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

admin = new Admin();
msg='';
  constructor(private service1:RegisrationService,private router1: Router) { }

  ngOnInit(): void {
  }
adminUser()
{
    console.log("entered");
    return this.service1.adminPage(this.admin).subscribe(
      data=>{
      console.log("successfully login");
      sessionStorage.setItem("email",JSON.stringify(this.admin.emailid));
      this.router1.navigate(['/viewusers']);
      this.msg='Good credentials';
    },
      error=>{console.log("exception occured");
      this.msg='bad credentials';
  }
    )
}
}
