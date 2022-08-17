import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeDataRoutingModule } from './practice-data-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    PipeComponent,
    FormsComponent
    
  ],
  imports: [
    CommonModule,
    PracticeDataRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ChildComponent,
    ParentComponent,
    PipeComponent,
    FormsComponent
  ]
})
export class PracticeDataModule { }
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]