import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionBoxPageComponent } from './accordion-box-page.component';

const routes: Routes = [{ path: '', component: AccordionBoxPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionBoxPageRoutingModule { }
