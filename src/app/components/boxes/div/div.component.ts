import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EnumDivDefaultValue } from './enums/enum-div-default-value';
import { TypeDivBorderType } from './types/type-div-border-type';
import { TypeDivBorderColorStyle } from './types/type-div-border-color-style';
import { TypeDivBgColorStyle } from './types/type-div-bg-color-style';
import { TypeDivOverflow } from './types/type-div-overflow';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DivComponent implements OnInit {
  // border options
  @Input() appBorderColorStyle: TypeDivBorderColorStyle;
  @Input() appBorderColor: string;
  @Input() appBorderWeight: string;
  @Input() appBorder: string;
  @Input() appBorderType: TypeDivBorderType;
  @Input() appBorderRadius: string;

  // background options
  @Input() appBgColorStyle: TypeDivBgColorStyle;
  @Input() appBgColor: string;

  // padding
  @Input() appPadding: string;

  // overflow
  @Input() appOverflow: TypeDivOverflow;

  constructor() {
    this.appBorderColorStyle = '';
    this.appBorderColor = EnumDivDefaultValue.BORDER_COLOR;
    this.appBorderWeight = '0';
    this.appBorder = '';
    this.appBorderType = 'solid';
    this.appBorderRadius = EnumDivDefaultValue.BORDER_RADIUS;

    this.appBgColorStyle = '';
    this.appBgColor = EnumDivDefaultValue.BG_COLOR;

    this.appPadding = EnumDivDefaultValue.PADDING;

    this.appOverflow = 'visible';
  }

  ngOnInit(): void {

  }

  private getBorderColorFromColorStyle(): string {
    switch (this.appBorderColorStyle) {
      case 'gray': return '#eeeeee';
      case 'blue': return '#a3d2f6';
    }
    return EnumDivDefaultValue.BORDER_COLOR;
  }

  private getBackgroundColorFromColorStyle(): string {
    switch (this.appBgColorStyle) {
      case 'gray': return '#f0f0f0';
      case 'blue': return '#e8f5ff';
    }
    return EnumDivDefaultValue.BG_COLOR;
  }

  getStyleObject(): any {
    const obj: any = {};

    // border
    if (this.appBorder !== '') {
      obj['border'] = this.appBorder;
    } else if (this.appBorderColorStyle !== '') {
      obj['border'] = `${this.appBorderWeight} ${this.appBorderType} ${this.getBorderColorFromColorStyle()}`;
    } else {
      obj['border'] = `${this.appBorderWeight} ${this.appBorderType} ${this.appBorderColor}`;
    }

    // border-radius
    obj['border-radius'] = this.appBorderRadius;

    // background
    if (this.appBgColorStyle !== '') {
      obj['background-color'] = this.getBackgroundColorFromColorStyle();
    } else {
      obj['background-color'] = this.appBgColor;
    }

    // padding
    obj['padding'] = this.appPadding;

    // overflow
    obj['overflow'] = this.appOverflow;

    return obj;
  }
}