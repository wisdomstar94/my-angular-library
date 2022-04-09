import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionBoxPageRoutingModule } from './accordion-box-page-routing.module';
import { AccordionBoxPageComponent } from './accordion-box-page.component';
import { AccordionBoxModule } from 'src/app/components/boxes/accordion-box/accordion-box.module';
import { DivModule } from 'src/app/components/boxes/div/div.module';


@NgModule({
  declarations: [
    AccordionBoxPageComponent
  ],
  imports: [
    CommonModule,
    AccordionBoxPageRoutingModule,
    AccordionBoxModule,
    DivModule,
  ]
})
export class AccordionBoxPageModule { }
