import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
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
export class LoanComponent implements OnInit {

  flag: boolean = false;
  res: number;
  xyz: number;
  abc: number;
  public menuState = 'out';
  loanamount: any;
  loan: any = []
  amount: any = [];
  roi: number;
  time: number;
  result: any;
  emi: number;
  principal: number;
  roiEmi: number;
  timeEmi: number;
  resultemi: number;
  finalArray: any = new Array;
  loanTaken: any;
  show: any = false;
  shows: any = false;
  pastloan: any;
  public Loan: FormGroup;

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor(private route: Router, private userData: UserdataService, private builder: FormBuilder) { }

  ngOnInit() {
    this.Loan = this.builder.group({
      principal: ['', Validators.required],
      timeEmi: ['', Validators.required]
    });
  }

  // to check whether user has taken any past loan or not
  pastLoan() {
    if(this.pastloan == 'yes') {
      this.shows = true;
    } else {
      this.shows = false;
    }
  }

  //which loan user is taking and set ROI according to it
  loanApply() {
    if (this.loanTaken == 'HomeLoan') {
      this.roiEmi = 11;
      this.roi = 11;
    } else {
      this.roiEmi = 10.5;
      this.roi = 10.5;
    }
    this.show= true;
  }
 
  // calculate the total amount of loan
  onSubmit() {
    this.result = this.resultemi * this.Loan.value.timeEmi;
    console.log(this.result)
  }

  // Calculate the EMI
  onEmi(Loan: NgForm) {
    this.roiEmi = this.roiEmi / 12 / 100;
    this.abc = (1 + ((this.roiEmi) * 1)) ** (Loan.value.timeEmi); 
    this.xyz = this.abc - 1;
    this. res = this.abc / this.xyz;
    this.resultemi = Loan.value.principal * this.roiEmi * this.res;
    this.flag = true;
  }

  // Get the user Information
  UserDetail() {
    this.finalArray.push(this.userData.method());
    console.log('data=====', this.finalArray);
    // this.value = this.finalArray[0]['Balance'];
    // console.log(this.value);    
  }
}

