import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementSizePositionInfoPageRoutingModule } from './element-size-position-info-page-routing.module';
import { ElementSizePositionInfoPageComponent } from './element-size-position-info-page.component';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ElementSizePositionInfoModule } from 'src/app/components-not-view/element-size-position-info/element-size-position-info.module';


@NgModule({
  declarations: [
    ElementSizePositionInfoPageComponent
  ],
  imports: [
    CommonModule,
    ElementSizePositionInfoPageRoutingModule,
    DivModule,
    ElementSizePositionInfoModule,
  ]
})
export class ElementSizePositionInfoPageModule { }
