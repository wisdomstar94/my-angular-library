import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinityScrollPageComponent } from './infinity-scroll-page.component';

const routes: Routes = [{ path: '', component: InfinityScrollPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfinityScrollPageRoutingModule { }
