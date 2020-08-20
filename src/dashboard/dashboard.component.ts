import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { NgModule } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent implements OnInit {

  userBalance: any;
  data: any = new Array;
  deposit: any;
  withdraw: any;
  amount: any;
  public menuState = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private userData: UserdataService) { }

  ngOnInit() {
    // on load of this page get the data of all user and set loan and name which is coming from json

    this.data.push(this.userData.method());
    // this.userData.setuserBalance(this.data[0]['Balance']);
    this.data[0]['Balance'] = this.userData.getuserBalance();
    this.userData.setuserLoan(this.data[0]['loan']);
    this.userData.setName(this.data[0]['username']);
  }

  //to get user detail
  UserDetail() {
    this.data.push(this.userData.method());
    console.log("Values: ", this.data);
    console.log("Balance: ", this.data[0]['Balance']);
    // this.userBalance = this.data[0]['Balance'];
    this.data[0]['Balance'] = this.userData.getuserBalance();
    // this.userData.setuserBalance(this.userBalance);

  }

  // on deposit reflect the user's balance and check whether they can take loan or not
  onDeposit() {
    this.deposit = ((this.userBalance) * 1 + (this.amount) * 1);
    this.data[0]['Balance'] = this.deposit;
    this.userBalance = this.data[0]['Balance'];
    console.log('Deposit: ', this.deposit);
    if (this.userBalance > "1000") {
      this.data[0]['loan'] = "yes";
    } else {
      this.data[0]['loan'] = "no";
    }
  }

   // on withdraw reflect the user's balance and check whether they can take loan or not
  onWithdraw() {
    this.withdraw = (this.userBalance) - (this.amount);
    if (this.withdraw >= 0) {
      this.data[0]['Balance'] = this.withdraw;
      this.userBalance = this.data[0]['Balance'];
      console.log('Withdraw: ', this.withdraw);
      if (this.userBalance > "1000") {
        this.data[0]['loan'] = "yes";
      } else {
        this.data[0]['loan'] = "no";
      }
    } else {
      alert('You cannot withdraw');
    }
  }

}
