import { Component, OnInit } from '@angular/core';
import { RegisrationService } from '../regisration.service';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.css']
})
export class WithdrawlComponent implements OnInit {

  withdrawl = {
    accType:'',
    accNo:'',
    amount:''
  }
  constructor(private service1:RegisrationService) { }

  ngOnInit(): void {
  }

  Withdrawl()
  {
    this.service1.doWithdrawl(this.withdrawl).subscribe(
      data => console.log("successfull"),
      error => console.log("unsuccessful")
    )
  }

}
