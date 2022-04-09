import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: 'list', loadChildren: () => import('./list-page/list-page.module').then(m => m.ListPageModule) },
      { path: 'table-style', loadChildren: () => import('./table-style-page/table-style-page.module').then(m => m.TableStylePageModule) },
      { path: 'swiper', loadChildren: () => import('./swiper-page/swiper-page.module').then(m => m.SwiperPageModule) },
      { path: 'accordion-box', loadChildren: () => import('./accordion-box-page/accordion-box-page.module').then(m => m.AccordionBoxPageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
