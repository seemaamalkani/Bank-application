import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { slideInOut } from '../slideInOut.animation';
import { Validators, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'

@Component({
  selector: 'app-fixed-deposit',
  templateUrl: './fixed-deposit.component.html',
  styleUrls: ['./fixed-deposit.component.css'],
  animations: [slideInOut]
})
export class FixedDepositComponent implements OnInit {

  flag: boolean = false;
  rate: number;
  xyz: number;
  abc: number;
  roi: number;
  public menuState = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  userBalance: any;
  Transaction: any = [];
  FinalFixedDeposit: any
  FixedDeposit: any
  Principal: any
  RateOfInterest: any;
  public FD: FormGroup;
  Time: any;
  NumberOfTimes: any
  constructor(private userData: UserdataService, private builder: FormBuilder) { }

  ngOnInit() {
    this.FD = this.builder.group({
      Principal: ['', Validators.required],
      Time: ['', Validators.required],
      NumberOfTimes: ['', Validators.required]
    });
  }

  ROI() {
    if (this.FD.value.Principal > 10000) {
      this.RateOfInterest = 5
      this.roi = 5 / 100;
    } else {
      this.RateOfInterest = 4.3
      this.roi = 4.3 / 100;
    }
  }

  // calculate the FD amount
  onOK(FD: NgForm) {
    console.log('FD',FD.value);
    
    this.abc = this.roi / FD.value.NumberOfTimes;
    this.xyz = 1 + ((this.abc) * 1);
    this.rate = this.xyz ** (FD.value.NumberOfTimes * FD.value.Time);
    this.FixedDeposit = FD.value.Principal * this.rate;
    this.flag = true;
    console.log('fd', this.FixedDeposit)
    alert('You have kept the FD');
  }

  // Reflect to user's balance after that any months
  onSubmit() {
    this.userBalance = this.userData.getuserBalance();
    this.FinalFixedDeposit = ((this.userBalance) * 1) + ((this.FixedDeposit) * 1);

    this.userData.setuserBalance(this.FinalFixedDeposit);
    alert('You have successfully broke the FD');
    console.log('changes', this.FinalFixedDeposit)
  }
}

