import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableStylePageRoutingModule } from './table-style-page-routing.module';
import { TableStylePageComponent } from './table-style-page.component';
import { TableStyleAModule } from 'src/app/components-not-view/tables/table-style-a/table-style-a.module';
import { DivModule } from 'src/app/components/boxes/div/div.module';


@NgModule({
  declarations: [
    TableStylePageComponent
  ],
  imports: [
    CommonModule,
    TableStylePageRoutingModule,
    TableStyleAModule,
    DivModule,
  ]
})
export class TableStylePageModule { }
