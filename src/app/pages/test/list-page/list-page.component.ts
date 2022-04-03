import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ListComponent } from 'src/app/components/boxes/list/list.component';
import { TypeListItemFlexPosition } from 'src/app/components/boxes/list/types/type-list-item-flex-position';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  @ViewChildren(ListComponent, { read: ListComponent }) lists!: QueryList<ListComponent>;
  item1JustifyContent: TypeListItemFlexPosition;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.item1JustifyContent = 'flex-start';
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('this.lists', this.lists);
      this.item1JustifyContent = 'flex-end';
    }, 3000);
  }

}
