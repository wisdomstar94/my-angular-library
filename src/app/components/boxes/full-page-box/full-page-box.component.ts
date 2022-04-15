import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { WheelCheckInfo } from 'src/app/components-not-view/wheel-check/interfaces/wheel-check-info';
import { SwiperCustomComponent } from '../swiper-custom/swiper-custom.component';
import { FullPageItemDirective } from './directives/full-page-item.directive';

@Component({
  selector: 'app-full-page-box',
  templateUrl: './full-page-box.component.html',
  styleUrls: ['./full-page-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullPageBoxComponent implements OnInit {
  @ContentChildren(FullPageItemDirective, { read: TemplateRef }) items!: QueryList<TemplateRef<any>>;
  @ViewChild('swiperCustomComponent') swiperCustomComponent!: SwiperCustomComponent;
  @Input() appScrollSpeed: number;
  isScrolling: boolean

  constructor() {
    this.appScrollSpeed = 300;
    this.isScrolling = false;
  }

  ngOnInit(): void {

  }

  wheelInfo(info: WheelCheckInfo): void {
    // console.log('..info', info);
    if (this.isScrolling) {
      return;
    }

    this.isScrolling = true;

    if (info.wheelDirection === 'down') {
      this.swiperCustomComponent.slidingToNext(() => {
        this.isScrolling = false;
      });
    } else {
      this.swiperCustomComponent.slidingToPrev(() => {
        this.isScrolling = false;
      });
    }
  }
}
