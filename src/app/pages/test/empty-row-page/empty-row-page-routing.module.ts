import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRowPageComponent } from './empty-row-page.component';

const routes: Routes = [{ path: '', component: EmptyRowPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyRowPageRoutingModule { }
