import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageBoxComponent } from './full-page-box.component';
import { FullPageItemDirective } from './directives/full-page-item.directive';
import { SwiperCustomModule } from '../swiper-custom/swiper-custom.module';
import { ExpandSizeToParentModule } from 'src/app/components-not-view/expand-size-to-parent/expand-size-to-parent.module';
import { WheelCheckModule } from 'src/app/components-not-view/wheel-check/wheel-check.module';



@NgModule({
  declarations: [
    FullPageBoxComponent,
    FullPageItemDirective
  ],
  imports: [
    CommonModule,
    SwiperCustomModule,
    ExpandSizeToParentModule,
    WheelCheckModule,
  ],
  exports: [
    FullPageBoxComponent,
    FullPageItemDirective
  ]
})
export class FullPageBoxModule { }
