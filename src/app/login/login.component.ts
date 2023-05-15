import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="Your Perfect Banking Partner"
  placeHolderData="Enter Account Number"

uname:any
psw:any
  constructor(private ds:DataService) { 

  }

  ngOnInit(): void{

  }

  login(){
  
    console.log(this.uname,this.psw);

    // alert(this.ds.sdata)
    alert(this.ds.checkData())
    
  }

  

}