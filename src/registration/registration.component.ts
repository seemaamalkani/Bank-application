import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { NG_VALIDATORS, Validator, ValidationErrors, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {AbstractControl} from '@angular/forms';
import {UserdataService} from '../userdata.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private myforms: FormGroup;

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let cpassword = AC.get('cpassword').value;

    if(password != cpassword) {
      console.log('false');
      AC.get('cpassword').setErrors({MatchPassword: true})
    } else {
      console.log('true');
      return null
      
    }
  }

  constructor(private fb: FormBuilder, private router: Router, private userData: UserdataService) { }

  ngOnInit() {
    this.myforms = this.fb.group({
      mob: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(8), Validators.maxLength(11)]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email]],
      account_no: ['', [Validators.required, Validators.pattern('[0-9]{15}$')]],
      cif_no: ['', [Validators.required, Validators.pattern('[0-9]{9}$')]],
      pass: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        cpassword: ['',  [Validators.required, Validators.minLength(8)]]
      },
        {
          validator: RegistrationComponent.MatchPassword
        }),
      branch: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      pan: ['', Validators.required],
      address: ['', Validators.required],
      aadhar: ['', [Validators.required, Validators.pattern('[0-9]{14}$')]]
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  register(myforms: NgForm) {
   console.log('Registration successful.');
    console.log(myforms.value);
    this.userData.addUserData(JSON.parse(JSON.stringify(myforms.value)));
    alert('You are registered');
  }

}