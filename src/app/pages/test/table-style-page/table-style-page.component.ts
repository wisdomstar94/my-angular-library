import { Component, OnInit } from '@angular/core';

interface TestItem {
  no: number;
  title: string;
}

@Component({
  selector: 'app-table-style-page',
  templateUrl: './table-style-page.component.html',
  styleUrls: ['./table-style-page.component.scss'],
})
export class TableStylePageComponent implements OnInit {
  items: TestItem[];

  constructor() {
    this.items = [
      {
        no: 3,
        title: '타이틀 3',
      },
      {
        no: 2,
        title: '타이틀 2',
      },
      {
        no: 1,
        title: '타이틀 1',
      },
    ];
  }

  ngOnInit(): void {

  }

  changeList(): void {
    this.items = [
      {
        no: 5,
        title: '타이틀 5',
      },
      {
        no: 4,
        title: '타이틀 4',
      },
    ];
  }
}
