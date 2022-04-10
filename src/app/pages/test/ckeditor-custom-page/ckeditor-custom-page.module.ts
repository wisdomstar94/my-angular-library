import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CkeditorCustomPageRoutingModule } from './ckeditor-custom-page-routing.module';
import { CkeditorCustomPageComponent } from './ckeditor-custom-page.component';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ListModule } from 'src/app/components/boxes/list/list.module';
import { CkeditorCustomModule } from 'src/app/components/forms/ckeditor-custom/ckeditor-custom.module';


@NgModule({
  declarations: [
    CkeditorCustomPageComponent
  ],
  imports: [
    CommonModule,
    CkeditorCustomPageRoutingModule,
    DivModule,
    ListModule,
    CkeditorCustomModule,
  ]
})
export class CkeditorCustomPageModule { }
