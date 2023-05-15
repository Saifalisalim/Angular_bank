import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sdata="service Data"

  constructor() { }

  checkData() {
    return "hello hi"
  }
}
