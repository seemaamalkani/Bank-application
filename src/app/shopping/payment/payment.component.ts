import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { UserdataService } from '../../userdata.service';
import { Validators, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  getBalance: any;
  balance: any;
  userbalance: any;
  show: any = false;
  show1: any = false;
  credit: any;
  Item: any = new Array;
  info: any;
  static informationList: any = new Array;
  public creditForm: FormGroup;
  public debitForm: FormGroup;
  userdata: any;
  static count = 0;
  startDate = new Date();
  flag: any = false;
  flag1: any = false;

  constructor(private router: Router, private userData: UserdataService, private builder: FormBuilder) { }

  ngOnInit() {
    this.creditForm = this.builder.group({
      credit: ['', [Validators.required, Validators.pattern('[0-9]{16}$')]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}$')]]
    });
    this.debitForm = this.builder.group({
      debit: ['', [Validators.required, Validators.pattern('[0-9]{16}$')]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}$')]]
    });
    this.checkPass();
  }

  // to get user infomartion list
  checkPass() {
    if (PaymentComponent.count === 0) {
      console.log("ckechpass");
      this.userData.getConfig()
        .map(response => response.json())
        .subscribe((data) => {
          console.log("info", data); this.info = data;
          PaymentComponent.informationList.push(this.info);
          console.log("data", this.info);
          console.log("info list", PaymentComponent.informationList);
        });
        PaymentComponent.count++;
    }
    console.log("count", PaymentComponent.count);

  }

  submit(creditForm: NgForm) {
    console.log("submiting...", PaymentComponent.informationList);

    PaymentComponent.informationList[0].forEach(element => {
      if (element.credit === creditForm.value.credit && element.expiryDate === creditForm.value.expiry && element.cvv === creditForm.value.cvv) {
        console.log('info data:', element);
        this.userdata = element;
        this.userData.userCredit(this.userdata);
        this.getBalance = this.userData.getShoppingBalance();
        console.log('details', this.userdata);
        alert('You have successfully LoggedIn');
        this.flag = true;
        this.calculateCreditBill();
      }
    });

    if(!this.flag) {
      alert('Please enter correct details');
    }
    if (creditForm.value.credit === "" && creditForm.value.expiry === "" && creditForm.value.cvv === "") {
      console.log('not match');
      alert('Details Required');
    }
  }

  calculateCreditBill() {
    this.userData.setUserBalanceCredit(this.userdata.Balance);
    this.Item = this.userData.getItem();
    this.balance = this.userData.getShoppingBalance();
    this.userbalance = this.userData.getUserBalanceCredit();
    console.log("Credit", this.userbalance);
    if (this.userbalance >= this.balance) {
      this.userbalance = (this.userbalance) - (this.balance);
      this.userData.setUserBalanceCredit(this.userbalance);
      console.log('Date:',this.startDate);
      this.userData.setDetails(this.startDate, this.Item, this.balance);
      
      console.log('New Bal', this.userbalance);
    } else {
      alert('You do not have enough balance');
    }
    this.router.navigate(['product']);
  }

  netbanking() {
    this.router.navigate(['']);
  }

  creditCard() {
    if (this.show = true) {
      this.show1 = false
    }
  }

  debitCard() {
    if (this.show1 = true) {
      this.show = false
    }
  }

  onSubmit(debitForm: NgForm) {
    console.log("submiting...", PaymentComponent.informationList);

    PaymentComponent.informationList[0].forEach(element => {
      if (element.debit === debitForm.value.debit && element.expirydebit === debitForm.value.expiry && element.dcvv === debitForm.value.cvv) {
        console.log('info data:', element);
        this.userdata = element;
        this.userData.userDebitDetail(this.userdata);
        this.getBalance = this.userData.getShoppingBalance();
        console.log('details', this.userdata);
        if(this.userdata.Balance >= this.getBalance) {
          this.userdata.Balance = (this.userdata.Balance) - (this.getBalance);
          this.userData.setUserBalanceDebit(this.userdata.Balance);
         // this.userData.userLogin(this.userdata);
        }
        alert('You have successfully LoggedIn');
        this.flag1 = true;
        this.router.navigate(['product']);
      }
    });

    if(!this.flag1) {
      alert('Please enter correct details');
    }
    if (debitForm.value.debit === "" && debitForm.value.expiry === "" && debitForm.value.cvv === "") {
      console.log('not match');
      alert('Details Required');
    }
  }

  logout() {
    this.router.navigate(['product']);
  }


}
