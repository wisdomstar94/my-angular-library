import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ElementPositionInfo } from '../interfaces/element-position-info';

@Directive({
  selector: '[appElementSizePositionInfo]'
})
export class ElementSizePositionInfoDirective implements OnInit, AfterViewInit {
  @Output() onNgOnInit = new EventEmitter<ElementSizePositionInfoDirective>();
  elementPositionInfo?: ElementPositionInfo;

  constructor(
    private renderer?: Renderer2,
    private elementRef?: ElementRef,
    private commonService?: CommonService,
  ) {

  }

  ngOnInit(): void {
    this.onNgOnInit.emit(this);
  }

  ngAfterViewInit(): void {
    this.getSizeAndPositionInfo();
  }

  refresh(): void {
    this.getSizeAndPositionInfo();
  }

  private getSizeAndPositionInfo(): void {
    const result: ElementPositionInfo = {
      offsetTop: 0,
      offsetLeft: 0,
      width: 0,
      height: 0,
    };

    console.log('this.elementRef', this.elementRef);
    const element = this.elementRef?.nativeElement;

    const width: number = element.clientWidth;
    const height: number = element.clientHeight;

    const offsetTop: number = element.offsetTop;
    const offsetLeft: number = element.offsetLeft;

    result.width = width;
    result.height = height;
    result.offsetTop = offsetTop;
    result.offsetLeft = offsetLeft;

    this.elementPositionInfo = result;
    console.log('this.elementPositionInfo', this.elementPositionInfo);
  }
}
