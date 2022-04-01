import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivComponent } from './div.component';



@NgModule({
  declarations: [
    DivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DivComponent
  ]
})
export class DivModule { }
