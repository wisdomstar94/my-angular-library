import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyRowPageRoutingModule } from './empty-row-page-routing.module';
import { EmptyRowPageComponent } from './empty-row-page.component';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ListModule } from 'src/app/components/boxes/list/list.module';
import { EmptyRowModule } from 'src/app/components/boxes/empty-row/empty-row.module';


@NgModule({
  declarations: [
    EmptyRowPageComponent
  ],
  imports: [
    CommonModule,
    EmptyRowPageRoutingModule,
    DivModule,
    ListModule,
    EmptyRowModule,
  ]
})
export class EmptyRowPageModule { }
