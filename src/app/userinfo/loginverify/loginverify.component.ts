import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginverify',
  templateUrl: './loginverify.component.html',
  styleUrls: ['./loginverify.component.scss']
})
export class LoginverifyComponent implements OnInit {

myname:any;
msg:any;

  constructor() { }

  ngOnInit(): void {
console.log(history.state.item)
    // this.myname=history.state.data
    this.myname=history.state.data
  }


}
