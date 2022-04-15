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
      { path: 'div', loadChildren: () => import('./div-page/div-page.module').then(m => m.DivPageModule) },
      { path: 'empty-row', loadChildren: () => import('./empty-row-page/empty-row-page.module').then(m => m.EmptyRowPageModule) },
      { path: 'empty-column', loadChildren: () => import('./empty-column-page/empty-column-page.module').then(m => m.EmptyColumnPageModule) },
      { path: 'scroll-check', loadChildren: () => import('./scroll-check-page/scroll-check-page.module').then(m => m.ScrollCheckPageModule) },
      { path: 'element-size-position-info', loadChildren: () => import('./element-size-position-info-page/element-size-position-info-page.module').then(m => m.ElementSizePositionInfoPageModule) },
      { path: 'ckeditor-custom', loadChildren: () => import('./ckeditor-custom-page/ckeditor-custom-page.module').then(m => m.CkeditorCustomPageModule) },
      // { path: 'infinity-scroll', loadChildren: () => import('./infinity-scroll-page/infinity-scroll-page.module').then(m => m.InfinityScrollPageModule) },
    ]
  },
  { path: 'infinity-scroll', loadChildren: () => import('./infinity-scroll-page/infinity-scroll-page.module').then(m => m.InfinityScrollPageModule) },
  { path: 'full-page', loadChildren: () => import('./full-page-box-page/full-page-box-page.module').then(m => m.FullPageBoxPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
