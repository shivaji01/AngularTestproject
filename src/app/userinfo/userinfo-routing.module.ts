import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';
import { LoginverifyComponent } from './loginverify/loginverify.component';

const routes: Routes = [
  {path :'', component:LoginComponent},


  {path :'login', component:LoginverifyComponent},
  {path :'loginerror', component:LoginerrorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserinfoRoutingModule { }
