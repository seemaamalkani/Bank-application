import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
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
export class TransactionComponent implements OnInit {

  userLoan: any;
  deposit: any;
  amount: any;
  userBalance: any;
  withdraw: any;
  public menuState = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private userData: UserdataService, private router: Router) { }

  ngOnInit() {
  }

  onDeposit() {
    this.userBalance = this.userData.getuserBalance();
    this.userLoan = this.userData.getuserLoan();
    this.deposit = ((this.userBalance) * 1 + (this.amount) * 1);
    if(this.userBalance >= "1000") {
      this.userData.setuserLoan('yes');
    } else {
      this.userData.setuserLoan('no');
    }
    this.userData.setuserBalance(this.deposit);
  }

  onWithdraw() {
    this.userBalance = this.userData.getuserBalance();
    this.userLoan = this.userData.getuserLoan();
    this.withdraw = (this.userBalance) - (this.amount);
    if (this.withdraw >= 0) {
      this.userData.setuserBalance(this.withdraw);
      if(this.userBalance >= "1000") {
        this.userData.setuserLoan('yes');
      } else {
        this.userData.setuserLoan('no');
      }
    } else {
      alert('You do not have enough balance ')
      this.withdraw = '';
    }
  }

  loanhistory() {
    this.router.navigate(['loanhistory']);
  }

  loan() {
    this.router.navigate(['loan']);
  }

  money() {
    this.router.navigate(['transfer']);
  }

}
