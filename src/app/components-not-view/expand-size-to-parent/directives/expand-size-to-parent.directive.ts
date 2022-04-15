import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Directive({
  selector: '[appExpandSizeToParent]'
})
export class ExpandSizeToParentDirective implements AfterViewInit {

  constructor(
    private renderer?: Renderer2,
    private elementRef?: ElementRef,
    private commonService?: CommonService,
  ) {

  }

  ngAfterViewInit(): void {
    this.checkSize();
  }

  checkSize(): void {
    // console.log('this.elementRef', this.elementRef);

    const element = this.elementRef?.nativeElement;

    const parentElement = element.parentElement;
    const parentElementWidth = parentElement.clientWidth;
    const parentElementHeight = parentElement.clientHeight;

    // console.log('parentElementWidth', parentElementWidth);
    // console.log('parentElementHeight', parentElementHeight);

    this.renderer?.setStyle(element, 'width', parentElementWidth + 'px');
    this.renderer?.setStyle(element, 'height', parentElementHeight + 'px');
    this.renderer?.setStyle(element, 'border', '0');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // console.log('onResize', event);
    this.checkSize();
  }
}
