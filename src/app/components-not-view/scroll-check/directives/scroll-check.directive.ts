import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ScrollCheckInfo } from '../interfaces/scroll-check-info';
import { ScrollCheckTarget } from '../types/scroll-check-target';

@Directive({
  selector: '[appScrollCheck]'
})
export class ScrollCheckDirective implements OnInit {
  @Output() onScrolled = new EventEmitter<ScrollCheckInfo>();
  @Input() appScrollCheckTarget: ScrollCheckTarget;
  @Input() appIsChildApply: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private commonService: CommonService,
  ) {
    this.appScrollCheckTarget = 'window';
    this.appIsChildApply = false;
  }

  ngOnInit(): void {
    // console.log('this.elementRef', this.elementRef);
    let target = this.appScrollCheckTarget === 'window' ? window : this.elementRef.nativeElement;
    if (this.appIsChildApply) {
      target = target.firstChild;
    }

    target.addEventListener('scroll', (event: Event) => {
      // console.log('scroll.event', event);

      let scrollTop = 0;
      if (this.appScrollCheckTarget === 'window') {
        scrollTop = document.querySelector('html')?.scrollTop!;
      } else {
        scrollTop = (event.target as any).scrollTop;
      }

      // console.log('scrollTop', scrollTop);
      this.onScrolled.emit({
        scrollTop: scrollTop,
      });
    });
  }
}
