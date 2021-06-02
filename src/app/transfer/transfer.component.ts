import { Component, OnInit } from '@angular/core';
import { Transfer } from '../transfer';
import { Router } from '@angular/router';
import {RegisrationService} from '../regisration.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  transfer = new Transfer(); 

  // primarybalance = sessionStorage.getItem("primaryBalance");
  // savingsbalance = sessionStorage.getItem("savingsBalance");



  constructor(private service1:RegisrationService, private router1: Router) { }

  ngOnInit(): void {

   }

  Transfer()
  {
      this.service1.doTransfer(this.transfer).subscribe(
        data =>console.log(data),
        error => console.log("exception occured")
      )
  }

}
