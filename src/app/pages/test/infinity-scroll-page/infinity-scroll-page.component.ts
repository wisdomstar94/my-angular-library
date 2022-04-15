import { Component, OnInit } from '@angular/core';
import { delay, of, take } from 'rxjs';
import { ScrollCheckInfo } from 'src/app/components-not-view/scroll-check/interfaces/scroll-check-info';

interface TempItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-infinity-scroll-page',
  templateUrl: './infinity-scroll-page.component.html',
  styleUrls: ['./infinity-scroll-page.component.scss']
})
export class InfinityScrollPageComponent implements OnInit {
  items: TempItem[];
  isDataGetting: boolean;

  constructor() {
    this.items = [];
    for (let i = 0; i < 101; i++) {
      this.items.push({
        title: '공지 ' + i,
        content: '내용 ' + i,
      });
    }

    this.isDataGetting = false;
  }

  ngOnInit(): void {

  }

  virtualScrolled(scrollInfo: ScrollCheckInfo): void {
    console.log('scrollInfo', scrollInfo);

    if (scrollInfo.isLastScrollArea) {
      this.appendData();
    }
    // if (scrollInfo.scrollHeight - )
  }

  private appendData(): void {
    if (this.isDataGetting) {
      return;
    }

    this.isDataGetting = true;

    const lastIndex = this.items.length;

    const addDatas: TempItem[] = [];
    for (let i = lastIndex; i < lastIndex + 88; i++) {
      addDatas.push({
        title: '공지 ' + i,
        content: '내용 ' + i,
      });
    }

    of(addDatas).pipe(
      delay(100),
      take(1),
    ).subscribe(data => {
      this.items = this.items.concat(data);
      this.isDataGetting = false;
    });
  }
}
