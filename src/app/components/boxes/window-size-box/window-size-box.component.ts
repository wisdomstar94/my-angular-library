import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-window-size-box',
  templateUrl: './window-size-box.component.html',
  styleUrls: ['./window-size-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowSizeBoxComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ViewChild('boxElement') boxElement!: ElementRef;
  @Input() appIsFixed?: boolean;
  @Input() zIndex?: number;
  width: number;
  height: number;

  private isNgAfterContentChecked: boolean;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.width = 0;
    this.height = 0;

    this.isNgAfterContentChecked = false;
  }

  ngAfterContentChecked(): void {
    if (this.isNgAfterContentChecked) {
      return;
    }

    this.checkSize();
    this.isNgAfterContentChecked = true;
  }

  ngAfterContentInit(): void {
    console.log('여기 실행 안됨?');
    this.checkSize();
  }

  ngOnInit(): void {

  }

  resized(event: any): void {
    console.log('event', event);
    this.checkSize();
  }

  checkSize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.changeDetectorRef.detectChanges();
  }

  getStyle(): any {
    const obj: any = {};

    obj['width'] = this.width + 'px';
    obj['height'] = this.height + 'px';

    if (this.boxElement !== undefined) {
      if (this.appIsFixed === true) {
        this.boxElement.nativeElement.parentElement.style['position'] = 'fixed';
        this.boxElement.nativeElement.parentElement.style['top'] = '0';
        this.boxElement.nativeElement.parentElement.style['left'] = '0';
      }

      console.log('this.boxElement.nativeElement.parentElement', this.boxElement.nativeElement.parentElement);
      this.boxElement.nativeElement.parentElement.style['width'] = obj['width'];
      this.boxElement.nativeElement.parentElement.style['height'] = obj['height'];
    }

    if (typeof this.zIndex === 'number') {
      this.boxElement.nativeElement.parentElement.style['z-index'] = this.zIndex + '';
    }

    return obj;
  }
}
