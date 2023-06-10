import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = "Your Perfect Banking Partner"
  placeHolderData = "Enter Account Number"


  constructor(private rout: Router, private fb: FormBuilder, private ds: DataService) {
  }

  // model
  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })


  ngOnInit(): void {

  }

  login() {

    if (this.loginForm.valid) {

      this.ds.loginApi(this.loginForm.value.acno, this.loginForm.value.psw)
        .subscribe((result: any) => {

          // store token in local storage
          localStorage.setItem("token",JSON.stringify(result.token))

          // alert(result.message)
          this.rout.navigateByUrl('home')

          localStorage.setItem("currentAcno",result.currentAcno)
          localStorage.setItem("currentUser",result.currentUser)

        },
          result => {
            alert(result.error.message)
          }
        )



    }
    else {
      alert('invalid form')
    }

    // console.log(this.uname,this.psw);



  }



}