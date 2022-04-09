import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollCheckDirective } from './directives/scroll-check.directive';



@NgModule({
  declarations: [
    ScrollCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollCheckDirective
  ]
})
export class ScrollCheckModule { }
