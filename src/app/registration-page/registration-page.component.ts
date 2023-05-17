import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  acno: any
  uname: any
  psw: any

  constructor() { }

  

  ngOnInit(): void {

  }

  register() {
    console.log(this.acno, this.uname, this.psw);
    alert("register works")

  }


}


