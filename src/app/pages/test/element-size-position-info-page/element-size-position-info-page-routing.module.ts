import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementSizePositionInfoPageComponent } from './element-size-position-info-page.component';

const routes: Routes = [{ path: '', component: ElementSizePositionInfoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementSizePositionInfoPageRoutingModule { }
