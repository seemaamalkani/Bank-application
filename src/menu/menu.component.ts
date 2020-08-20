import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,private userData:UserdataService) { }

  ngOnInit() {
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

  deposit() {
    this.router.navigate(['transaction']);
  }

  loan() {
    this.router.navigate(['loan']);
  }

  loanhistory() {
    this.router.navigate(['loanhistory']);
  }

  logoutbtn() {
    this.userData.setLogout(false);
    this.router.navigate(['']);
    setTimeout (() => {
      console.log("Hello",this.userData.onLogout());
    },500)
  }

  money() {
    this.router.navigate(['transfer']);
  }

  fixeddeposit() {
    this.router.navigate(['fixed-deposit']);
  }

  credit() {
    this.router.navigate(['genratebill']);
  }

}
