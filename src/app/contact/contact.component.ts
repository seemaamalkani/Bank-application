import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 21.192572;
  lng: number = 72.7997367;
  constructor() { }

  ngOnInit() {
  }

}
