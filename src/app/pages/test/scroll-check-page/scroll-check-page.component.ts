import { Component, OnInit } from '@angular/core';
import { ScrollCheckInfo } from 'src/app/components-not-view/scroll-check/interfaces/scroll-check-info';

@Component({
  selector: 'app-scroll-check-page',
  templateUrl: './scroll-check-page.component.html',
  styleUrls: ['./scroll-check-page.component.scss']
})
export class ScrollCheckPageComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  miniBoxScrolled(info: ScrollCheckInfo): void {
    console.log('miniBoxScrolled.info', info);
  }

  windowScrolled(info: ScrollCheckInfo): void {
    console.log('windowScrolled.info', info);
  }
}

