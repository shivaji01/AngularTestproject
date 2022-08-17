import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // uname=''
  // password=''

  firstname: string='';
  password: string='';
term:boolean=false;
dropdown: string='';
  imagefetch='./assets/image1.jpg'
  constructor() { }

  ngOnInit(): void {
  }
  // Onsubmitclick(login1:NgModel)
  // {
  //   console.log("Form details are:" ,login1)
  //   //alert("data submitted successfully...")
  // }
  imagestyle={
  'width': '500px',

  }

  adddata(newadd:NgForm){
    console.log(newadd.value)
  }
  resetvalue(newadd:NgForm)
  {
    newadd.reset();
  }
}

