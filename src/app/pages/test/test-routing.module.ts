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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
