import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivPageComponent } from './div-page.component';

const routes: Routes = [{ path: '', component: DivPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivPageRoutingModule { }
