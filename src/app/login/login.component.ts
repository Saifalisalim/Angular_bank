import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your Perfect Banking Partner"
  placeHolderData="Enter Account Number"

  constructor() { }

  ngOnInit(): void{

  }

  login(){
    alert("login clicked")
  }

  unameChange(event:any){
    console.log(event.target.value);
    
  }

}
