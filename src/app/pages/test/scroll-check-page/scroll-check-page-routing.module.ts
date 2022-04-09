import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollCheckPageComponent } from './scroll-check-page.component';

const routes: Routes = [{ path: '', component: ScrollCheckPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollCheckPageRoutingModule { }
