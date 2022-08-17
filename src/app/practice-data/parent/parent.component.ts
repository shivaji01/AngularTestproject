import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  mystyle={}
day='friday'
//input
  MobileNo='9552262541'
  //input


  //output
  displaymsgofchild=''
  //output

  
  constructor() { }

  ngOnInit(): void {
// ternary operator for inbuild directive 
this.mystyle={'background-color': this.day=='friday' ? 'green' : 'blue' }
//or//

    // if(this.day=='friday')
    // {
    //   this.mystyle={
    //     'background-color':'red'
    //   }
    // }
    //   else{
    //     this.mystyle={
    //       'background-color' : 'yellow'
    //   }
    // }
// inbuild directive
  }

//output
Getmsgfromchild(event : any)
{
  this.displaymsgofchild=event;
}
//output
}
