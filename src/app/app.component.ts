import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { bufferToggle, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTestData';

  StudentDetails=[
    {
      Firstname: 'Shivaji',
      Lastname:'Kshirsagar',
      MobileNo: 9552262541,
      Address: 'Karad'
    },
    {
      Firstname: 'Bhavesh',
      Lastname:'chaudhari',
      MobileNo: 9763737528,
      Address: 'pune'
    },
    {
      Firstname: 'Kajal',
      Lastname:'mote',
      MobileNo: 9764812033,
      Address: 'Pune'
    },
    {
      Firstname: 'Sagar',
      Lastname:'Dharmshetti',
      MobileNo: 7743866501,
      Address: 'Mumbai'
    }
  ]
// inbuild directive 
  mystyle={
    'background-color' : 'yellow',
    'color':'blue'
  }

  

 //inbuild directive 
  
  buttonenable=false


  monday=true
  Onsubmitclick(textref: any)

  {
    console.log(textref)
    alert("button submited successfully....")
  }

 

  Onsubmit()
  {
        alert("button submited successfully....")
  }
  



  }
  
  

