import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyRowComponent } from './empty-row.component';



@NgModule({
  declarations: [
    EmptyRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyRowComponent
  ]
})
export class EmptyRowModule { }
