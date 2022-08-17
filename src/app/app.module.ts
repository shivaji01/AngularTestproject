import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserinfoModule} from './userinfo/userinfo.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeDataModule } from './practice-data/practice-data.module';
import { PracticeDataRoutingModule } from './practice-data/practice-data-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    UserinfoModule,
    PracticeDataModule,
    PracticeDataRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

  
 }
