import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivPageRoutingModule } from './div-page-routing.module';
import { DivPageComponent } from './div-page.component';
import { ListModule } from 'src/app/components/boxes/list/list.module';
import { DivModule } from 'src/app/components/boxes/div/div.module';


@NgModule({
  declarations: [
    DivPageComponent
  ],
  imports: [
    CommonModule,
    DivPageRoutingModule,
    ListModule,
    DivModule,
  ]
})
export class DivPageModule { }
