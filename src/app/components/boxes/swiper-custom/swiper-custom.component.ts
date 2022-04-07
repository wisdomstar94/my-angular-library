import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwiperSlideCustomDirective } from './directives/swiper-slide-custom.directive';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-swiper-custom',
  templateUrl: './swiper-custom.component.html',
  styleUrls: ['./swiper-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperCustomComponent implements OnInit {
  // style.scss 에 반드시 @import 'swiper/scss'; 을 넣어주세요!!
  @ContentChildren(SwiperSlideCustomDirective, { read: TemplateRef }) templates!: QueryList<TemplateRef<any>>;
  @ViewChild('swiper') swiper!: SwiperComponent;
  config: SwiperOptions;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.config = {
      direction: 'horizontal',
      spaceBetween: 0,
      navigation: true,
      pagination: {
        clickable: true,
      },
      scrollbar: {
        draggable: true,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
      },
    };
  }

  ngOnInit(): void {

  }

  setConfig(config: SwiperOptions): void {
    this.config = config;
    this.changeDetectorRef.detectChanges();
  }

  getConfig(): SwiperOptions {
    return this.config;
  }

  onSwiper(swiper: Swiper): void {
    console.log('onSwiper.swiper', swiper);
  }

  onSlideChange([swiper]: Swiper[]): void {
    // console.log('onSlideChange.swiper', swiper);
    const realIndex = swiper.realIndex;
    console.log('onSlideChange.realIndex', realIndex);
  }
}
