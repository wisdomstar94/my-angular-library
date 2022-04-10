import { Component, OnInit, ViewChild } from '@angular/core';
import { CkeditorCustomComponent } from 'src/app/components/forms/ckeditor-custom/ckeditor-custom.component';

@Component({
  selector: 'app-ckeditor-custom-page',
  templateUrl: './ckeditor-custom-page.component.html',
  styleUrls: ['./ckeditor-custom-page.component.scss']
})
export class CkeditorCustomPageComponent implements OnInit {
  @ViewChild('ckeditorCustomComponent') ckeditorCustomComponent!: CkeditorCustomComponent;

  constructor() {

  }

  ngOnInit(): void {

  }

  getCkeditorData(): void {
    const editorData = this.ckeditorCustomComponent.getEditorData();
    console.log('editorData', editorData);
  }

  changeEditorData(): void {
    this.ckeditorCustomComponent.setEditorData(`
      <strong>ggg</strong>
    `);
  }

  checkEditorData(): void {
    const data = this.ckeditorCustomComponent.getEditorData();
    console.log('data', data);
  }
}
