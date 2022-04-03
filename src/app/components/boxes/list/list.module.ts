import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemDirective } from './directives/list-item.directive';



@NgModule({
  declarations: [
    ListComponent,
    ListItemDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ListItemDirective,
  ]
})
export class ListModule { }
