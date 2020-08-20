import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { slideInOut } from '../slideInOut.animation';

@Component({
  selector: 'app-genratebill',
  templateUrl: './genratebill.component.html',
  styleUrls: ['./genratebill.component.css'],
  animations:[slideInOut]
})
export class GenratebillComponent implements OnInit {

  balance: any;
  public menuState = 'out';
  data: any = new Array;
  index: any = -1;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private userData:UserdataService) { }

  ngOnInit() {
    this.data = this.userData.getDetails();
    console.log(this.data);
    //console.log("datat", this.data[0][1]);
  }

  pay(value) {
    this.index = 0;
    console.log("Pay", value);
    console.log('Bal', value[2]);
    this.balance = this.userData.getuserBalance();
    if(this.balance >= value[2]) {
      this.balance = (this.balance) - (value[2]);
      this.userData.setuserBalance(this.balance);
      this.data.splice(this.index,1);
      alert('You have succefuuly buyed the products');
    }
    this.index = -1;
  }

}
