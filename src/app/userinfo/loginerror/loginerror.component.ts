import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginerror',
  templateUrl: './loginerror.component.html',
  styleUrls: ['./loginerror.component.scss']
})
export class LoginerrorComponent implements OnInit {
  myname:any;
  constructor() { }

  ngOnInit(): void {
    console.log(history.state.item)
    // this.myname=history.state.data
    this.myname=history.state.data
  }

}
