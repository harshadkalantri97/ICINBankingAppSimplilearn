import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';
import {AdminService} from '../admin.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  userslist: Observable<User[]>;

  user = new User();

  constructor(private adminservice: AdminService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      console.log("Inside viewuser componentts")
      this.userslist = this.adminservice.getUsersList();
    }

    lock(id:number){
        console.log(id);
        console.log("lock enabled");
        this.adminservice.toLockUser(id).pipe(first()).subscribe((data)=>this.reloadData(),
        error => console.log("exception occured"));
        // this.adminservice.toLockUser(id).subscribe(
        //   data=>console.log("successful"),
        //   error => console.log("exception occured")
        // )
    }

}
