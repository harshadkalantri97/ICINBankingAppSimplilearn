import { Component, OnInit } from '@angular/core';
import {RegisrationService} from '../regisration.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service1:RegisrationService) { }

  priaccountid = sessionStorage.getItem("primaryAccount");
  savaccountid = sessionStorage.getItem("savingsAccount");
  transhistory = []
  

  ngOnInit(): void {
    this.service1.getHistory(this.priaccountid).subscribe(
      res => {
        res.forEach(element => {
          this.transhistory.push(element)
        });
        console.log(this.transhistory);
      }
    )
  }

}
