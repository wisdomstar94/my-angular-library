import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { DivModule } from 'src/app/components/boxes/div/div.module';
import { ListModule } from 'src/app/components/boxes/list/list.module';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    DivModule,
    ListModule,
  ]
})
export class TestModule { }
