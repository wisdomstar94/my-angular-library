import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandSizeToParentDirective } from './directives/expand-size-to-parent.directive';



@NgModule({
  declarations: [
    ExpandSizeToParentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandSizeToParentDirective
  ]
})
export class ExpandSizeToParentModule { }
