import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {


  pipemessage= 'Hello from Shivaji'

  amount= 646568484

  birthday=new Date (1990,10,10);
  constructor() { }

  ngOnInit(): void {
  }

}
