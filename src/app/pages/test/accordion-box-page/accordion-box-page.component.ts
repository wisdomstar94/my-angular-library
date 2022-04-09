import { Component, OnInit } from '@angular/core';
import { AccordionBoxComponent } from 'src/app/components/boxes/accordion-box/accordion-box.component';

interface TempItem {
  content: string;
  content2: string;
  accordionComponent?: AccordionBoxComponent;
}

@Component({
  selector: 'app-accordion-box-page',
  templateUrl: './accordion-box-page.component.html',
  styleUrls: ['./accordion-box-page.component.scss']
})
export class AccordionBoxPageComponent implements OnInit {
  items: TempItem[] = [
    {
      content: '안녕하세요. 질문합니다. 0',
      content2: '안녕하세요. 답변입니다. 0',
    },
    {
      content: '안녕하세요. 질문합니다. 1',
      content2: '안녕하세요. 답변입니다. 1',
    },
    {
      content: '안녕하세요. 질문합니다. 2',
      content2: '안녕하세요. 답변입니다. 2',
    },
    {
      content: '안녕하세요. 질문합니다. 3',
      content2: '안녕하세요. 답변입니다. 3',
    },
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  accordionToggleButtonClick(item: TempItem): void {
    for (const inItem of this.items) {
      if (item !== inItem) {
        inItem.accordionComponent?.hide();
      }
    }
    item.accordionComponent?.toggle();
  }
}
