import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { ListItemDirective } from './directives/list-item.directive';
import { EnumListDefaultValue } from './enums/enum-list-default-value';
import { TypeListDirection } from './types/type-list-direction';
import { TypeListItemFlexPosition } from './types/type-list-item-flex-position';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, AfterContentInit {
  @ContentChildren(ListItemDirective, { read: TemplateRef }) templateItems!: QueryList<TemplateRef<any>>;
  @ContentChildren(ListItemDirective, { read: ListItemDirective }) items!: QueryList<ListItemDirective>;

  @Input() appDefaultDirection: TypeListDirection;
  @Input() appDefaultMarginRight: string;
  @Input() appDefaultMarginBottom: string;
  @Input() appDefaultItemJustifyContent?: TypeListItemFlexPosition;
  @Input() appDefaultItemAlignItems?: TypeListItemFlexPosition;
  @Input() appDefaultItemBgColor?: string;
  @Input() appDefaultUlJustifyContent?: TypeListItemFlexPosition;
  @Input() appDefaultUlAlignItems?: TypeListItemFlexPosition;

  constructor() {
    this.appDefaultDirection = 'vertical';
    this.appDefaultMarginRight = EnumListDefaultValue.ITEM_MARGIN_RIGHT;
    this.appDefaultMarginBottom = EnumListDefaultValue.ITEM_MARGIN_BOTTOM;
  }

  ngAfterContentInit(): void {
    this.items.forEach((item, index) => {
      item.template = (this.templateItems as any)._results[index];
      item.appDirection = this.appDefaultDirection;
    });
  }

  ngOnInit(): void {

  }

  getUlStyleObject(): any {
    const obj: any = {};

    if (typeof this.appDefaultUlJustifyContent !== 'string') {
      obj['justify-content'] = 'flex-start';
    } else {
      obj['justify-content'] = this.appDefaultUlJustifyContent;
    }

    if (typeof this.appDefaultUlAlignItems !== 'string') {
      obj['align-items'] = 'flex-start';
    } else {
      obj['align-items'] = this.appDefaultUlAlignItems;
    }

    return obj;
  }

  getItemStyleObject(item: ListItemDirective): any {
    const obj: any = {};

    // width
    if (this.appDefaultDirection === 'vertical') {
      obj['width'] = '100%';
    } else {
      obj['width'] = typeof item.appWidth === 'string' ? item.appWidth : 'auto';
    }

    // align items
    if (typeof item.appAlignItems === 'string') {
      obj['align-items'] = item.appAlignItems;
    } else if (typeof this.appDefaultItemAlignItems === 'string') {
      obj['align-items'] = this.appDefaultItemAlignItems;
    } else {
      obj['align-items'] = 'flex-start';
    }

    // justify content
    if (typeof item.appJustifyContent === 'string') {
      obj['justify-content'] = item.appJustifyContent;
    } else if (typeof this.appDefaultItemJustifyContent === 'string') {
      obj['justify-content'] = this.appDefaultItemJustifyContent;
    } else {
      obj['justify-content'] = 'flex-start';
    }

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

    // background-color
    if (typeof this.appDefaultItemBgColor === 'string') {
      obj['background-color'] = this.appDefaultItemBgColor;
    } else if (typeof item.appBgColor === 'string') {
      obj['background-color'] = item.appBgColor;
    }

    return obj;
  }
}
