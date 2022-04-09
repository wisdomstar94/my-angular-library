import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStyleADirective } from './directives/table-style-a.directive';

@NgModule({
  declarations: [
    TableStyleADirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableStyleADirective
  ]
})
export class TableStyleAModule { }
