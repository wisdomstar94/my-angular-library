import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window-size-box',
  templateUrl: './window-size-box.component.html',
  styleUrls: ['./window-size-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowSizeBoxComponent implements OnInit {
  width: number;
  height: number;

  constructor() {
    this.width = 0;
    this.height = 0;
  }

  ngOnInit(): void {
    this.checkSize();
  }

  resized(event: any): void {
    console.log('event', event);
    this.checkSize();
  }

  checkSize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}
