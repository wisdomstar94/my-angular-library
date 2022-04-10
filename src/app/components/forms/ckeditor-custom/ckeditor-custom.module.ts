import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorCustomComponent } from './ckeditor-custom.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { CkeditorTextareaCustomDirective } from './directives/ckeditor-textarea-custom.directive';



@NgModule({
  declarations: [
    CkeditorCustomComponent,
    CkeditorTextareaCustomDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
  ],
  exports: [
    CkeditorCustomComponent
  ],
})
export class CkeditorCustomModule { }
