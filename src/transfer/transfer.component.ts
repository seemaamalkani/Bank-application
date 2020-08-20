import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { element } from 'protractor';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
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
export class TransferComponent implements OnInit {

  flag: boolean = false;
  withdraw: number;
  getCurrentBalance: any;
  amount: any;
  selectedItem: any;
  info: any = new Array;
  userInfoList: any = new Array;
  show: any = false;
  show1: any = false;
  public transfer = [];
  getaccount: any;
  othertransferDetail: any = new Array;
  transferUserDetail: any = new Array;
  public menuState = 'out';
 
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private userData: UserdataService) { }

  ngOnInit() {
    this.UserDetail();
    this.getCurrentBalance = this.userData.getuserBalance();
  }

  UserDetail() {
    this.userData.getConfig()
      .map(response => response.json())
      .subscribe((data) => {
        console.log("aaa", data); this.info = data;
        this.transfer = this.info;
        this.transferDetail();
      })
    this.userInfoList.push(this.userData.method());
    console.log("info", this.userInfoList);
    console.log('infor', this.info);
  }

  transferDetail() {
    this.getaccount = this.userData.getAccount();
    console.log('sadfsg');
    console.log('dsfghj', this.transfer);
    this.transfer.forEach(info => {
      if (this.getaccount != info.account_number) {
        this.othertransferDetail.push(info);
      }
    });
    console.log('other', this.othertransferDetail);
  }

  neft() {
    this.show = true;
    this.show1 = false;
  }

  selectdetail(value) {
    this.flag = true;
    console.log(value);
    this.selectedItem = value.account_number;
    this.othertransferDetail.forEach(element => {
      if (value.account_number == element.account_number) {
        this.transferUserDetail.push(element);
      }
    });
    console.log(this.selectedItem);
  }

  rtgs() {
    this.show = false;
    this.show1 = true;
  }

  onSubmit() {
    this.getCurrentBalance = this.userData.getuserBalance();
    console.log(this.transferUserDetail);
    console.log('amount: ', this.amount);
    if (this.show == true) {
      this.show1 = false;
      console.log('limit value: ', this.transferUserDetail[0]['limit'][0]['neft']);
      if (this.amount >= this.transferUserDetail[0]['limit'][0]['neft'] || this.amount > this.getCurrentBalance) {
        alert('You cannot transfer');
      } else {
        this.withdraw = (this.getCurrentBalance) - (this.amount);
        this.userData.setuserBalance(this.withdraw);
        alert('You have succefully transfered' + this.amount);
      }
    } else {
      this.show = false;
      if (this.amount >= this.transferUserDetail[0]['limit'][0]['rtgs'] || this.amount > this.getCurrentBalance) {
        alert('You cannot transfer');
      } else {
        this.withdraw = (this.getCurrentBalance) - (this.amount) - (this.transferUserDetail[0]['charges']);
        this.userData.setuserBalance(this.withdraw);
        alert('You have succefully transfered');
      }
    }
  }

}
