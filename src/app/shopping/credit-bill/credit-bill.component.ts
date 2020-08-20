import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-bill',
  templateUrl: './credit-bill.component.html',
  styleUrls: ['./credit-bill.component.css']
})
export class CreditBillComponent implements OnInit {

  userbalance: any;
  balance: any;
  Item: any = new Array;
  userDetail: any = new Array;

  constructor(private userData: UserdataService, private router: Router) { }

  ngOnInit() {
    this.userDetail = this.userData.getuserCredit();
    console.log('userDetail', this.userDetail);
    this.userData.setUserBalanceCredit(this.userDetail.Balance);
    this.Item = this.userData.getItem();
    this.balance = this.userData.getShoppingBalance();
    this.userbalance = this.userData.getUserBalanceCredit();
    console.log("Credit", this.Item, this.balance);
  }

  onSubmit(){
    if(this.userbalance >= this.balance) {
      this.userbalance = (this.userbalance) - (this.balance);
      console.log('New Bal', this.userbalance);
      this.userData.setUserBalanceCredit(this.userbalance);
    } else {
      alert('You do not have enough balance');
    }
    this.router.navigate(['product']);
  }
}
