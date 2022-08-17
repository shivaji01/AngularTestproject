import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { LoginverifyComponent } from './loginverify/loginverify.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
 

@NgModule({
  declarations: [
    LoginComponent,
    LoginverifyComponent,
    LoginerrorComponent,
    NavbarComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    LoginverifyComponent,
    LoginerrorComponent,
    NavbarComponent
  ]
})
export class UserinfoModule { }
