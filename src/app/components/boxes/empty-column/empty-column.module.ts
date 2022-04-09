import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyColumnComponent } from './empty-column.component';



@NgModule({
  declarations: [
    EmptyColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyColumnComponent
  ]
})
export class EmptyColumnModule { }
