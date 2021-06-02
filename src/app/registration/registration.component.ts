import { Component, OnInit } from '@angular/core';
import { RegisrationService } from '../regisration.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User = new User();
  msg=''


  constructor(private service1:RegisrationService, private router1: Router) { }

  ngOnInit(): void {
  }

 RegisterUser()
{
  console.log('entered')
  this.service1.UserRegister(this.user).subscribe(
    data => {
      console.log("good response");
      this.msg="Successfully registered"
      this.router1.navigate(['/login']);
    },
    error => {
      console.log("exception occured");
      this.msg="Check entered credentials";
    }
  )
}

}
