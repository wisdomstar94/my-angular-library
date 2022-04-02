import { Directive, Input, OnInit } from '@angular/core';
import { EnumListDefaultValue } from '../enums/enum-list-default-value';
import { TypeListDirection } from '../types/type-list-direction';
import { TypeListItemFlexPosition } from '../types/type-list-item-flex-position';

@Directive({
  selector: '[appListItem]'
})
export class ListItemDirective implements OnInit {
  @Input() appWidth?: string;
  @Input() appDirection: TypeListDirection;
  @Input() appAlignItems: TypeListItemFlexPosition;
  @Input() appJustifyContent: TypeListItemFlexPosition;
  @Input() appMarginRight?: string;
  @Input() appMarginBottom?: string;
  @Input() template: any;

  constructor() {
    this.appDirection = 'vertical';
    this.appAlignItems = 'flex-start';
    this.appJustifyContent = 'flex-start';
  }

  ngOnInit(): void {

  }
}
