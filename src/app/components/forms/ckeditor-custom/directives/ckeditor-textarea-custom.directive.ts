import { AfterContentInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { delay, fromEvent, Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Directive({
  selector: '[appCkeditorTextareaCustom]'
})
export class CkeditorTextareaCustomDirective implements AfterContentInit, OnDestroy {
  @Input() appTextAreaMinHeight?: string;
  contentElementFocusoutEventSubscription!: Subscription;
  contentElementDomChangeCheckObserver!: any;

  constructor(
    private renderer?: Renderer2,
    private elementRef?: ElementRef,
    private commonService?: CommonService,
  ) {

  }

  ngOnDestroy(): void {
    this.contentElementFocusoutEventSubscription.unsubscribe();
    this.contentElementDomChangeCheckObserver.disconnect();
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      const contentElement = this.elementRef?.nativeElement.lastChild;
      this.setStyle();
      this.setMinHeight();

      this.contentElementFocusoutEventSubscription = fromEvent(contentElement, 'focusout').pipe(delay(0)).subscribe(_data => {
        this.setStyle();
      });

      this.contentElementDomChangeCheckObserver = this.commonService?.checkChildDomChange(contentElement, () => {
        this.setMinHeight();
      });
    });
  }

  private setStyle(): void {
    const contentElement = this.elementRef?.nativeElement.lastChild;

    this.renderer?.setStyle(contentElement, 'border-left', '1px solid #ccc');
    this.renderer?.setStyle(contentElement, 'border-right', '1px solid #ccc');
    this.renderer?.setStyle(contentElement, 'border-bottom', '1px solid #ccc');
  }

  private setMinHeight(): void {
    const contentElement = this.elementRef?.nativeElement.lastChild;

    if (typeof this.appTextAreaMinHeight === 'string') {
      this.renderer?.setStyle(contentElement, 'min-height', this.appTextAreaMinHeight);
    }
  }
}
