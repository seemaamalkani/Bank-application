import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { element } from 'protractor';
import 'rxjs/add/operator/map';
// import { AuthGuard } from './auth.guard';

@Injectable()
export class UserdataService {

  userLoggedIn: boolean;
  userDebit: any;
  BuyedBalance: any;
  selectedItem: any = new Array;
  systemDate: any;
  userCreditDetail: any;
  account: any;
  name: any;
  shoppingBlanace: any;
  loan: any;
  balance: any;
  informationList: any = new Array;
  test: string;
  data: any;
  map = new Map();
  item: any = new Array;
  creditDetail: any = new Array;
  userArray = [];

  constructor(private http: Http) {
  }

  public count = 0;
  public userDetail: any;

  //configUrl = 'http://localhost:4200/assets/loginDeatil.json';

  getConfig() {
    return this.http.get('./assets/loginDetail.json');
  }

  get() {
    return this.count;
  }

  addUserData(user) {
    this.userArray.push(user);
    this.data = this.userArray;
    localStorage.setItem("data", JSON.stringify(this.data));
    console.log(this.userArray);
    this.count++;
  }

  userLogin(abc) {
    this.userDetail = abc;
    console.log('Value: ', this.userDetail);
  }

  userCredit(value) {
    this.userCreditDetail = value;
    console.log('detail', this.userCreditDetail);
  }

  getuserCredit() {
    return this.userCreditDetail;
  }

  setuserBalance(value) {
      this.balance = value;
      this.userDetail.Balance = this.balance;
      console.log('New', this.userDetail.Balance);
  }

  setUserBalanceCredit(value) {
    this.balance = value;
    this.userCreditDetail.Balance = this.balance;
    console.log('NEw', this.userCreditDetail.Balance);
  }

  userDebitDetail(value) {
    this.userDebit = value;
    console.log('detail', this.userDebit);
  }

  getuserDebitDetail() {
    return this.userDebit;
  }

  setUserBalanceDebit(value) {
    this.userDebit.Balance = value;
  }

  getUSerBalanceDebit() {
    return this.userDebit.Balance;
  }

  setDetails(date, value, bal) {
    var newArray: any = new Array;
    this.systemDate = date;
    this.selectedItem.push(value);
    this.BuyedBalance = bal;
    newArray.push(this.selectedItem);
    newArray.push(this.systemDate);
    newArray.push(this.BuyedBalance);
    // newArray.push({"selected_item":[this.selectedItem]},{"system_Date":this.systemDate},{"Balance":this.BuyedBalance});
    this.creditDetail.push(newArray);
    console.log('JSon', this.creditDetail);
  }

  getDetails() {
    console.log('GET JSON', this.creditDetail);
    return this.creditDetail;
  }

  getUserBalanceCredit() {
    return this.userCreditDetail.Balance;
  }

  getuserBalance() {
    console.log('Get', this.userDetail.Balance);

    return this.userDetail.Balance;
  }


  setItem(value) {
    this.item = value;
    console.log('Item: ', this.item);

  }

  setName(value) {
    this.name = value;
    console.log('Name: ', this.name);
  }

  getName() {
    console.log('GetName: ', this.name);
    return this.name;

  }

  getItem() {
    console.log('GetItem: ', this.item);
    return this.item;
  }

  setShoppingBalance(value) {
    this.shoppingBlanace = value;
    console.log('soppingBalance: ', this.shoppingBlanace);
  }

  getShoppingBalance() {
    console.log('GetBalance', this.shoppingBlanace);
    return this.shoppingBlanace;

  }

  setAccount(value) {
    this.account = value;
  }

  getAccount() {
    return this.account;
  }

  setuserLoan(value) {
    this.loan = value;
    this.userDetail.loan = this.loan;
    console.log('New Loan', this.userDetail.loan);
  }

  getuserLoan() {
    console.log('Get Loan', this.userDetail.loan);
    return this.userDetail.loan;

  }

  method() {
    // this.test = localStorage.getItem("data");
    // // console.log('########',this.test);
    // this.userArray = JSON.parse(this.test);
    // console.log(this.userDetail);
    // return this.userDetail;
    this.loan = this.userDetail.loan;
    this.balance = this.userDetail.Balance;
    console.log(this.userDetail.Balance);
    return this.userDetail;

  }

  // checkPass(account_no, password) {
  //   this.test = localStorage.getItem("data");
  //   // console.log('########',this.test);
  //   this.userArray = JSON.parse(this.test);
  //   console.log('####', this.userArray);

  //   console.log(account_no, password);
  //   // let flag = false;
  //   // let data;
  //   // this.userArray.forEach(element => {
  //   //   console.log(element.account_no, element.pass.password);
  //   //   if (element.account_no === account_no && element.pass.password === password) {
  //   //     console.log('Element: ', element);
  //   //     flag = true;
  //   //     data = element;
  //   //     // return element;
  //   //   } else {
  //   //     console.log('Element-else: ', element);
  //   //     return false;
  //   //   }
  //   // });
  //   // if (flag) {
  //   //   return data;
  //   // }
  //   for (let i = 0; i < this.userArray.length; i++) {
  //     if (this.userArray[i].account_no === account_no && this.userArray[i].pass.password === password) {
  //       return this.userArray[i];
  //     }
  //   }
  // }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  fetchData() {
    return this.http.get('../assets/productList.json');
  }
 onLogout(){
    if(this.userLoggedIn) {
      return true;
    } else {
      return false;
    }
 }

 setLogout(value) {
   console.log('setvalue', value);
   
  if(value) {
    return this.userLoggedIn=true;
  } else {
    return this.userLoggedIn=false;
  }
 }

}
