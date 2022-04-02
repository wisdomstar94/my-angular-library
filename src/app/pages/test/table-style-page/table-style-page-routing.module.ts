import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStylePageComponent } from './table-style-page.component';

const routes: Routes = [{ path: '', component: TableStylePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableStylePageRoutingModule { }
