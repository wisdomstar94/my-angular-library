import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperCustomComponent } from './swiper-custom.component';
import { SwiperSlideCustomDirective } from './directives/swiper-slide-custom.directive';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    SwiperCustomComponent,
    SwiperSlideCustomDirective
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [
    SwiperCustomComponent,
    SwiperSlideCustomDirective,
  ]
})
export class SwiperCustomModule { }
