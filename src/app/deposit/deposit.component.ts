import { Component, OnInit } from '@angular/core';
import {RegisrationService} from '../regisration.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
deposit = {
  accType:'',
  accNo:'',
  amount:''
}
  constructor(private service1:RegisrationService) { }

  ngOnInit(): void {
  }
Deposit()
{
    this.service1.doDeposit(this.deposit).subscribe(
      data => console.log("successful"),
      error => console.log("exception occured")
    )
}
}
