import { AfterContentChecked, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ListItemDirective } from './directives/list-item.directive';
import { EnumListDefaultValue } from './enums/enum-list-default-value';
import { TypeListDirection } from './types/type-list-direction';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, AfterContentChecked {
  @ContentChildren(ListItemDirective, { read: TemplateRef }) templateItems!: QueryList<TemplateRef<any>>[];
  @ContentChildren(ListItemDirective, { read: ListItemDirective }) items!: QueryList<ListItemDirective>;

  @Input() appDirection: TypeListDirection;
  @Input() appDefaultMarginRight: string;
  @Input() appDefaultMarginBottom: string;

  constructor() {
    this.appDirection = 'vertical';
    this.appDefaultMarginRight = EnumListDefaultValue.ITEM_MARGIN_RIGHT;
    this.appDefaultMarginBottom = EnumListDefaultValue.ITEM_MARGIN_BOTTOM;
  }

  ngAfterContentChecked(): void {
    // console.log('..1.. this.templateItems', this.templateItems);
    // console.log('..1.. this.items', this.items);

    this.items.forEach((item, index) => {
      item.template = (this.templateItems as any)._results[index];
      item.appDirection = this.appDirection;
      // console.log('..item', item);
    });
    // for (const item of this.items) {
    //   item.appDirection = this.appDirection;
    // }
  }

  ngOnInit(): void {

  }

  getItemStyleObject(item: ListItemDirective): any {
    const obj: any = {};

    // width
    if (this.appDirection === 'vertical') {
      obj['width'] = '100%';
    } else {
      obj['width'] = typeof item.appWidth === 'string' ? item.appWidth : 'auto';
    }

    // align items
    obj['align-items'] = item.appAlignItems;

    // justify content
    obj['justify-content'] = item.appJustifyContent;

    // margin-right
    obj['margin-right'] = this.appDefaultMarginRight;
    if (typeof item.appMarginRight === 'string') {
      obj['margin-right'] = item.appMarginRight;
    }

    // margin-bottom
    obj['margin-bottom'] = this.appDefaultMarginBottom;
    if (typeof item.appMarginBottom === 'string') {
      obj['margin-bottom'] = item.appMarginBottom;
    }

    return obj;
  }
}
