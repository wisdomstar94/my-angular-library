import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { delay, of, take } from 'rxjs';
import SwiperCore, { Swiper, SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { PaginationStyleAComponent } from './components/pagination-style-a/pagination-style-a.component';
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
  @ViewChild('paginationStyleAComponent') paginationStyleAComponent!: PaginationStyleAComponent;
  appConfig: SwiperOptions;

  @Input() appIsPaginationShow: boolean;
  @Input() appDirection: 'vertical' | 'horizontal';
  @Input() appIsAutoplay: boolean;
  @Input() appAutoplayDelay: number;
  @Input() appIsLoop: boolean;
  @Input() appSpeed: number;
  currentActiveIndex: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.appDirection = 'horizontal';
    this.appIsAutoplay = false;
    this.appAutoplayDelay = 3000;
    this.appIsLoop = false;
    this.appSpeed = 300;

    this.appConfig = {
      direction: this.appDirection,
      spaceBetween: 0,
      navigation: true,
      pagination: {
        clickable: true,
      },
      scrollbar: {
        draggable: true,
      },
      loop: this.appIsLoop,
      autoplay: false,
      speed: this.appSpeed,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
      // },
    };

    this.appIsPaginationShow = true;
    this.currentActiveIndex = 0;
  }

  ngOnInit(): void {
    this.appConfig.direction = this.appDirection;
    this.appConfig.loop = this.appIsLoop;
    // this.changeDetectorRef.detectChanges();
    if (this.appIsAutoplay === true) {
      this.appConfig.autoplay = {
        delay: this.appAutoplayDelay,
        disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
      };
    } else {
      this.appConfig.autoplay = false;
    }


    // setTimeout(() => {
    //   this.slidingToNext();
    // }, 3000);

    // setTimeout(() => {
    //   this.slidingToPrev();
    // }, 6000);
  }

  setConfig(config: SwiperOptions): void {
    this.appConfig = config;
    this.changeDetectorRef.detectChanges();
  }

  getConfig(): SwiperOptions {
    return this.appConfig;
  }

  onSwiper(swiper: Swiper): void {
    console.log('onSwiper.swiper', swiper);
  }

  onSlideChange([swiper]: Swiper[]): void {
    // console.log('onSlideChange.swiper', swiper);
    const realIndex = swiper.realIndex;
    console.log('onSlideChange.realIndex', realIndex);
    this.currentActiveIndex = realIndex;
    this.changeDetectorRef.detectChanges();
    if (this.paginationStyleAComponent !== undefined) {
      this.paginationStyleAComponent.detectChanges();
    }
  }

  slidingToPrev(speedCallback?: () => void): void {
    this.swiper.swiperRef.slidePrev(this.appSpeed, false);
    of([]).pipe(
      delay(this.appSpeed),
      take(1),
    ).subscribe(data => {
      if (speedCallback !== undefined) {
        speedCallback();
      }
    });
  }

  slidingToNext(speedCallback?: () => void): void {
    this.swiper.swiperRef.slideNext(this.appSpeed, false);
    of([]).pipe(
      delay(this.appSpeed),
      take(1),
    ).subscribe(data => {
      if (speedCallback !== undefined) {
        speedCallback();
      }
    });
  }
}
