import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyColumnPageComponent } from './empty-column-page.component';

const routes: Routes = [{ path: '', component: EmptyColumnPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyColumnPageRoutingModule { }
