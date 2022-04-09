import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyColumnPageRoutingModule } from './empty-column-page-routing.module';
import { EmptyColumnPageComponent } from './empty-column-page.component';
import { EmptyColumnModule } from 'src/app/components/boxes/empty-column/empty-column.module';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ListModule } from 'src/app/components/boxes/list/list.module';


@NgModule({
  declarations: [
    EmptyColumnPageComponent
  ],
  imports: [
    CommonModule,
    EmptyColumnPageRoutingModule,
    DivModule,
    ListModule,
    EmptyColumnModule,
  ]
})
export class EmptyColumnPageModule { }
