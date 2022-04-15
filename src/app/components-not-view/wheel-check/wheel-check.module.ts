import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelCheckDirective } from './directives/wheel-check.directive';



@NgModule({
  declarations: [
    WheelCheckDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WheelCheckDirective
  ]
})
export class WheelCheckModule { }
