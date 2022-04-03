import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { SwiperCustomComponent } from 'src/app/components/boxes/swiper-custom/swiper-custom.component';

@Component({
  selector: 'app-swiper-page',
  templateUrl: './swiper-page.component.html',
  styleUrls: ['./swiper-page.component.scss']
})
export class SwiperPageComponent implements OnInit, AfterViewChecked {
  @ViewChild('swiperCustomComponent') swiperCustomComponent!: SwiperCustomComponent;

  constructor() {

  }

  ngAfterViewChecked(): void {
    // const config = this.swiperCustomComponent.getConfig();
    // config.width = 600;
    // config.height = 80;
    // this.swiperCustomComponent.setConfig(config);
  }

  ngOnInit(): void {

  }
}
