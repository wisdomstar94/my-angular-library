import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementSizePositionInfoDirective } from './directives/element-size-position-info.directive';



@NgModule({
  declarations: [
    ElementSizePositionInfoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElementSizePositionInfoDirective
  ]
})
export class ElementSizePositionInfoModule { }
