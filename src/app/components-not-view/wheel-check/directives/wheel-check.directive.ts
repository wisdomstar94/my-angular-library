import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WheelCheckInfo } from '../interfaces/wheel-check-info';

@Directive({
  selector: '[appWheelCheck]'
})
export class WheelCheckDirective {
  @Output() onWheelInfo = new EventEmitter<WheelCheckInfo>();

  constructor() {

  }

  @HostListener('wheel', ['$event'])
  private onWheel(event: WheelEvent): void {
    console.log('event', event);
    const info: WheelCheckInfo = {
      wheelDirection: 'up',
    };

    if (event.deltaY < 0) {
      // console.log("스크롤 위로");
      info.wheelDirection = 'up';
    } else {
      // console.log("스크롤 아래로");
      info.wheelDirection = 'down';
    }

    this.onWheelInfo.emit(info);
  }
}
