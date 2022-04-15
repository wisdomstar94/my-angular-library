import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPageBoxPageRoutingModule } from './full-page-box-page-routing.module';
import { FullPageBoxPageComponent } from './full-page-box-page.component';
import { FullPageBoxModule } from 'src/app/components/boxes/full-page-box/full-page-box.module';
import { WindowSizeBoxModule } from 'src/app/components/boxes/window-size-box/window-size-box.module';
import { WheelCheckModule } from 'src/app/components-not-view/wheel-check/wheel-check.module';


@NgModule({
  declarations: [
    FullPageBoxPageComponent
  ],
  imports: [
    CommonModule,
    FullPageBoxPageRoutingModule,
    FullPageBoxModule,
    WindowSizeBoxModule,
    WheelCheckModule,
  ]
})
export class FullPageBoxPageModule { }
