import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollCheckPageRoutingModule } from './scroll-check-page-routing.module';
import { ScrollCheckPageComponent } from './scroll-check-page.component';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ListModule } from 'src/app/components/boxes/list/list.module';
import { ScrollCheckModule } from 'src/app/components-not-view/scroll-check/scroll-check.module';


@NgModule({
  declarations: [
    ScrollCheckPageComponent
  ],
  imports: [
    CommonModule,
    ScrollCheckPageRoutingModule,
    DivModule,
    ListModule,
    ScrollCheckModule,
  ]
})
export class ScrollCheckPageModule { }
