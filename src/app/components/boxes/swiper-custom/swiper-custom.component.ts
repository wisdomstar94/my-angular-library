import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList, TemplateRef } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SwiperSlideCustomDirective } from './directives/swiper-slide-custom.directive';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper-custom',
  templateUrl: './swiper-custom.component.html',
  styleUrls: ['./swiper-custom.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperCustomComponent implements OnInit, AfterContentChecked {
  // style.scss 에 반드시 @import 'swiper/scss'; 을 넣어주세요!!
  @ContentChildren(SwiperSlideCustomDirective, { read: TemplateRef }) templates!: QueryList<TemplateRef<any>>;
  config: SwiperOptions;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.config = {
      direction: 'horizontal',
      spaceBetween: 0,
      navigation: false,
      pagination: {
        clickable: true,
      },
      scrollbar: {
        draggable: true,
      },
      loop: true,
    };
  }

  ngAfterContentChecked(): void {
    console.log('SwiperCustomComponent.templates', this.templates);
    this.changeDetectorRef.detectChanges();
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
    console.log('onSlideChange.swiper', swiper);
  }
}
