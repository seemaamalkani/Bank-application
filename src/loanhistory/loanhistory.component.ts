import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-loanhistory',
  templateUrl: './loanhistory.component.html',
  styleUrls: ['./loanhistory.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class LoanhistoryComponent implements OnInit {

  loan_history: any;
  show: boolean;
  data: any = new Array;
  public menuState = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }  

  constructor(private userData: UserdataService) { }

  ngOnInit() {
    this.loanHistory();
  }

  // Fetch the loan history from json
  loanHistory(){
    this.data.push(this.userData.method());
    if(this.data[0]['loan'] === "yes"){
      this.show = true;
      this.loan_history = this.data[0]['loan_history'];
      console.log("data",this.loan_history);
    }
    if(this.data[0]['loan'] === "no"){
      this.show = false;
    }
  }

}
