import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperCustomComponent } from './swiper-custom.component';
import { SwiperSlideCustomDirective } from './directives/swiper-slide-custom.directive';
import { SwiperModule } from 'swiper/angular';
import { PaginationStyleAComponent } from './components/pagination-style-a/pagination-style-a.component';
import { DivModule } from '../div/div.module';


@NgModule({
  declarations: [
    SwiperCustomComponent,
    SwiperSlideCustomDirective,
    PaginationStyleAComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    DivModule,
  ],
  exports: [
    SwiperCustomComponent,
    SwiperSlideCustomDirective,
  ]
})
export class SwiperCustomModule { }
