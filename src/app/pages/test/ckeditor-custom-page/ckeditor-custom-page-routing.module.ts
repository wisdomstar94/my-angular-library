import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CkeditorCustomPageComponent } from './ckeditor-custom-page.component';

const routes: Routes = [{ path: '', component: CkeditorCustomPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CkeditorCustomPageRoutingModule { }
