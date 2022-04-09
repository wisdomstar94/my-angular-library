import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBoxComponent } from './accordion-box.component';
import { DivModule } from '../div/div.module';



@NgModule({
  declarations: [
    AccordionBoxComponent
  ],
  imports: [
    CommonModule,
    DivModule,
  ],
  exports: [
    AccordionBoxComponent
  ]
})
export class AccordionBoxModule { }
