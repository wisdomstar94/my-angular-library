import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfinityScrollPageRoutingModule } from './infinity-scroll-page-routing.module';
import { InfinityScrollPageComponent } from './infinity-scroll-page.component';
import { WindowSizeBoxModule } from 'src/app/components/boxes/window-size-box/window-size-box.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollCheckModule } from 'src/app/components-not-view/scroll-check/scroll-check.module';
import { ExpandSizeToParentModule } from 'src/app/components-not-view/expand-size-to-parent/expand-size-to-parent.module';

@NgModule({
  declarations: [
    InfinityScrollPageComponent
  ],
  imports: [
    CommonModule,
    InfinityScrollPageRoutingModule,
    WindowSizeBoxModule,

    ScrollingModule,
    ScrollCheckModule,
    ExpandSizeToParentModule,
  ]
})
export class InfinityScrollPageModule { }
