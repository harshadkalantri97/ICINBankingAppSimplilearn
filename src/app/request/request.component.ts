import { Component, OnInit } from '@angular/core';
import {RegisrationService} from '../regisration.service';
import { Router } from '@angular/router'
import { Chequebook } from '../chequebook';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  chequebook = new Chequebook();
  msg=''

  constructor(private service1:RegisrationService, private router1: Router ) { }

  ngOnInit(): void {
  }

  userid = sessionStorage.getItem("id");
  
  
  cbrequest ={
    description : '',
    user :
    {
      id : sessionStorage.getItem("id")
    }
  }


//cbrequest1 = JSON.stringify(this.cbrequest)


  requestCheck()
  {
    console.log(this.cbrequest)
    this.service1.Request(this.cbrequest).subscribe(
      data=>{console.log("good response");
      this.msg = 'Your request is processing'
      // this.router1.navigate(['/myprofile']);
    },
      error => {console.log("exception occured");
      this.msg='Sry the entry not stored';
     }
    )
  }


}
