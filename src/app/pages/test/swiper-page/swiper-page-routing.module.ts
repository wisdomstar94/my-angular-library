import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperPageComponent } from './swiper-page.component';

const routes: Routes = [{ path: '', component: SwiperPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwiperPageRoutingModule { }
