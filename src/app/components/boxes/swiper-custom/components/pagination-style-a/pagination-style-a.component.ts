import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-pagination-style-a',
  templateUrl: './pagination-style-a.component.html',
  styleUrls: ['./pagination-style-a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationStyleAComponent implements OnInit {
  @Input() appItemsCount: number;
  @Input() appCurrentActiveIndex: number;
  @Input() appConfig!: SwiperOptions;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.appItemsCount = 0;
    this.appCurrentActiveIndex = 0;
  }

  ngOnInit(): void {

  }

  detectChanges(): void {
    console.log('appCurrentActiveIndex', this.appCurrentActiveIndex);
    this.changeDetectorRef.detectChanges();
  }
}
