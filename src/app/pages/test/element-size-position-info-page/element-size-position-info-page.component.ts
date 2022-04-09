import { Component, OnInit } from '@angular/core';
import { ElementSizePositionInfoDirective } from 'src/app/components-not-view/element-size-position-info/directives/element-size-position-info.directive';

interface TempItem {
  text: string;
  appBgColor: string;
  elementSizePositionInfoDirective?: ElementSizePositionInfoDirective;
}

@Component({
  selector: 'app-element-size-position-info-page',
  templateUrl: './element-size-position-info-page.component.html',
  styleUrls: ['./element-size-position-info-page.component.scss']
})
export class ElementSizePositionInfoPageComponent implements OnInit {
  items: TempItem[];

  constructor() {
    this.items = [
      {
        text: 'hi 1',
        appBgColor: '#eeeeee',
      },
      {
        text: 'hi 2',
        appBgColor: '#dddddd',
      },
      {
        text: 'hi 3',
        appBgColor: '#cccccc',
      },
      {
        text: 'hi 4',
        appBgColor: '#bbbbbb',
      },
    ];
  }

  ngOnInit(): void {

  }

  checkItems(): void {
    console.log('this.items', this.items);
  }
}
