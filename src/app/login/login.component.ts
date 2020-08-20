import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { Validators, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;
  getBalance: any;
  info: any;
  informationList: any = new Array;
  public loginForm: FormGroup;
  userdata: any;
  data: any = new Array;
  flag: any = false;

  constructor(private builder: FormBuilder, private router: Router, private userData: UserdataService) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      account_no: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.checkPass();
  }

  navigation() {
    this.router.navigate(['product']);
  }

  onDashboard() {
    this.router.navigate(['dashboard'])
  }

  // to get user info list
  checkPass() {
    this.userData.getConfig()
      .map(response => response.json())
      .subscribe((data) => {
        console.log("info", data); this.info = data;
        this.informationList.push(this.info);
        console.log("data", this.info);
        console.log("info list", this.informationList);
      })
  }
 
  navigate() {
    this.router.navigate(['registration']);
  }

  // check on click of login does user directly logged in from bank or from shopping site
  // Accordingly it it navigate the page
  login(loginForm: NgForm) {
    //console.log("logged in..");

    this.informationList[0].forEach(info => {
      if (info.account_number === loginForm.value.account_no && info.password === loginForm.value.password) {
        this.flag = true;
        console.log("yes");
        console.log("info data", info);
        this.getBalance = this.userData.getShoppingBalance();
        if(!this.getBalance){
          this.userdata = info;
          this.userData.userLogin(this.userdata);
        } else {
          if(this.userData.getuserCredit()){
            this.userData.userLogin(this.userData.getuserCredit());
            this.userData.setuserBalance(info.Balance);
          } else {
            this.userData.userLogin(this.userData.getuserDebitDetail());
          }
        }
        this.msg="";
        alert("login successfully");
        console.log("match");
        // this.getBalance = this.userData.getShoppingBalance();
        this.userData.setAccount(info.account_number);
        this.userData.setName(info.username);
        if (this.getBalance) {
          this.router.navigate(['bill'])
        } else {
          this.router.navigate(["dashboard"]);
        }
      }
    });
    this.userData.setLogout(this.flag);

    if(!this.flag) {
      console.log('Not valid details');
      this.msg = '*Please Enter proper Details'
    }

    if (loginForm.value.account_no === "" && loginForm.value.password === "") {
      console.log("not match");
      alert("login required");
    }

  }
}