import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
//input
  @Input() data1=''
//input
//Output
@Output() newmsgout= new EventEmitter<any>();
//output

  constructor() { }

  ngOnInit(): void {
  }
//output
// OnSubmit( )
// {
//   this.newmsgout.emit('hi from child to parent')
// }
//output

//output text
OnSubmit(txtmsgpass:any )
{
  this.newmsgout.emit(txtmsgpass)
}
//output text
}
