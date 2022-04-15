import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageBoxPageComponent } from './full-page-box-page.component';

const routes: Routes = [{ path: '', component: FullPageBoxPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPageBoxPageRoutingModule { }
