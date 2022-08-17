import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }
  loginform = new FormGroup({
    username : new FormControl('', [Validators.required,Validators.pattern("^[a-z]+")]),
    password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern("^[0-9]{1,5}$")])
  })

  logindata=[{
    username:'bhavesh',
    password:2222,
    message:'Welcome Bhavesh'
  },
  {
    username:'sagar',
    password:33333,
    message:'Welcome Sagar'
  },
  {
    username:'shivaji',
    password:1111,
    message:'Welcome Shivaji'
  },
]



  ngOnInit(): void {
    
  }

  // loginbutton()
  // {
  //   this.logindata.filter((item:any)=>
  //   {
  //     if(item.username==this.loginform.value.username &&
  //       item.password==this.loginform.value.password)
  //       {
  //         this.route.navigateByUrl('/loginverify', {state:{data:item.message}})
  //       }
  //     })

  // }


  loginbutton()
  {
    //console.log(this.loginform.value)
    this.logindata.forEach((item:any)=>
    {
      if(item.username==this.loginform.value.username &&
        item.password==this.loginform.value.password)
        {
          this.route.navigateByUrl("/loginverify", {state:item});
        }
        else{
         // this.route.navigateByUrl('/loginerror');
        }
      })

  }



  Reset(loginform:any)
  {
  this.loginform.reset();
  }


}
