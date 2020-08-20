import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { slideInOut } from '../slideInOut.animation';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  animations:[slideInOut]
})
export class BillComponent implements OnInit {

  userbalance: any;
  name: any;
  balance: any;
  Item: any = new Array;
  public menuState = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private userData: UserdataService, private router: Router) { }

  ngOnInit() {
    this.Invoice();
  }

  // to get the details of the user which will be printed on the bill

  Invoice() {
    this.Item = this.userData.getItem();
    this.balance = this.userData.getShoppingBalance();
    this.userbalance = this.userData.getuserBalance();
    this.name = this.userData.getName();
    console.log('Invoice fun: ', this.Item, this.balance, this.name);
  }

  //set the userbalance and reflect its information

  onSubmit() {
    if(this.userbalance >= this.balance) {
      this.userbalance = (this.userbalance) - (this.balance);
      this.userData.setuserBalance(this.userbalance);
      this.router.navigate(['dashboard']);
    } else {
      alert('You do not have enough balance');
    }
  }

}
