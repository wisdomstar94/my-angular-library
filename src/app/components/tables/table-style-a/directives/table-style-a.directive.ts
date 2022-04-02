import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTableStyleA]'
})
export class TableStyleADirective implements OnInit {
  constructor(
    private elementRef?: ElementRef,
  ) {
    // console.log('elementRef', this.elementRef);
  }

  ngOnInit(): void {
    const table = this.getTable();
    table.style.width = '100%';
    table.style['border-spacing'] = '0';
    table.style['border-top'] = '1px solid #d4dee6';
    table.style['border-left'] = '1px solid #d4dee6';

    const thead = table.querySelector('thead');

    const theadTrs: any[] = thead.querySelectorAll('tr');
    theadTrs.forEach((theadTr, index) => {
      const theadTrThs: any[] = theadTr.querySelectorAll('th');
      // console.log('theadTrThs', theadTrThs);
      theadTrThs.forEach((theadTrTh, index2) => {
        theadTrTh.style['background-color'] = '#F3F5F8';
        theadTrTh.style['border-right'] = '1px solid #d4dee6';
        theadTrTh.style['border-bottom'] = '1px solid #d4dee6';
        theadTrTh.style['font-size'] = '14px';
        theadTrTh.style['color'] = '#485260';
        theadTrTh.style['font-family'] = 'Spoqa Han Sans Neo';
        theadTrTh.style['padding'] = '14px 16px';
        theadTrTh.style['position'] = 'relative';
      });
    });

    const tbody = table.querySelector('tbody');
    const tbodyTrs: any[] = tbody.querySelectorAll('tr');
    tbodyTrs.forEach((tbodyTr, index) => {
      const tbodyTrTds: any[] = tbodyTr.querySelectorAll('td');
      // console.log('tbodyTrTds', tbodyTrTds);
      tbodyTrTds.forEach((tbodyTrTd, index2) => {
        tbodyTrTd.style['background-color'] = '#FFFFFF';
        tbodyTrTd.style['border-right'] = '1px solid #d4dee6';
        tbodyTrTd.style['border-bottom'] = '1px solid #d4dee6';
        tbodyTrTd.style['font-size'] = '13px';
        tbodyTrTd.style['color'] = '#222222';
        tbodyTrTd.style['font-family'] = 'Spoqa Han Sans Neo';
        tbodyTrTd.style['padding'] = '10px 16px';
        tbodyTrTd.style['letter-spacing'] = '0.65px';
        tbodyTrTd.style['position'] = 'relative';
      });
    });
  }

  getTable(): any {
    return this.elementRef?.nativeElement;
  }
}
