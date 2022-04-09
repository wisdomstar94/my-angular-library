import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Directive({
  selector: '[appTableStyleA]',
})
export class TableStyleADirective implements OnInit, OnDestroy, AfterViewInit {
  observer?: MutationObserver;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private commonService: CommonService,
  ) {

  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  ngAfterViewInit(): void {
    this.updateStyle();
  }

  ngOnInit(): void {
    this.observer = this.commonService.checkChildDomChange(this.elementRef?.nativeElement.querySelector('tbody'), () => {
      this.updateStyle();
    });
  }

  private updateStyle(): void {
    const table = this.getTable();
    this.renderer.setStyle(table, 'width', '100%');
    this.renderer.setStyle(table, 'border-spacing', '0');
    this.renderer.setStyle(table, 'border-top', '1px solid #d4dee6');
    this.renderer.setStyle(table, 'border-left', '1px solid #d4dee6');

    const thead = table.querySelector('thead');

    const theadTrs: any[] = thead.querySelectorAll('tr');
    theadTrs.forEach((theadTr, _index) => {
      const theadTrThs: any[] = theadTr.querySelectorAll('th');
      theadTrThs.forEach((theadTrTh, _index2) => {
        this.renderer.setStyle(theadTrTh, 'background-color', '#F3F5F8');
        this.renderer.setStyle(theadTrTh, 'border-right', '1px solid #d4dee6');
        this.renderer.setStyle(theadTrTh, 'border-bottom', '1px solid #d4dee6');
        this.renderer.setStyle(theadTrTh, 'font-size', '14px');
        this.renderer.setStyle(theadTrTh, 'color', '#485260');
        this.renderer.setStyle(theadTrTh, 'font-family', 'Spoqa Han Sans Neo');
        this.renderer.setStyle(theadTrTh, 'padding', '14px 16px');
        this.renderer.setStyle(theadTrTh, 'position', 'relative');
      });
    });

    const tbody = table.querySelector('tbody');
    const tbodyTrs: any[] = tbody.querySelectorAll('tr');
    tbodyTrs.forEach((tbodyTr, _index) => {
      const tbodyTrTds: any[] = tbodyTr.querySelectorAll('td');
      tbodyTrTds.forEach((tbodyTrTd, _index2) => {
        this.renderer.setStyle(tbodyTrTd, 'background-color', '#FFFFFF');
        this.renderer.setStyle(tbodyTrTd, 'border-right', '1px solid #d4dee6');
        this.renderer.setStyle(tbodyTrTd, 'border-bottom', '1px solid #d4dee6');
        this.renderer.setStyle(tbodyTrTd, 'font-size', '13px');
        this.renderer.setStyle(tbodyTrTd, 'color', '#222222');
        this.renderer.setStyle(tbodyTrTd, 'font-family', 'Spoqa Han Sans Neo');
        this.renderer.setStyle(tbodyTrTd, 'padding', '10px 16px');
        this.renderer.setStyle(tbodyTrTd, 'letter-spacing', '0.65px');
        this.renderer.setStyle(tbodyTrTd, 'position', 'relative');
      });
    });
  }

  getTable(): any {
    return this.elementRef?.nativeElement;
  }
}
