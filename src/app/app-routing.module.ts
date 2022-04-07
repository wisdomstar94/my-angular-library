import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    pathMatch: 'prefix',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule)
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/test',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
