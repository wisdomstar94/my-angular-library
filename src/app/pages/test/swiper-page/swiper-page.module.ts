import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperPageRoutingModule } from './swiper-page-routing.module';
import { SwiperPageComponent } from './swiper-page.component';
import { SwiperCustomModule } from 'src/app/components/boxes/swiper-custom/swiper-custom.module';

@NgModule({
  declarations: [
    SwiperPageComponent
  ],
  imports: [
    CommonModule,
    SwiperPageRoutingModule,
    SwiperCustomModule,
  ]
})
export class SwiperPageModule { }
