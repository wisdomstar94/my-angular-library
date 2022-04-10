import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-ckeditor-custom',
  templateUrl: './ckeditor-custom.component.html',
  styleUrls: ['./ckeditor-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CkeditorCustomComponent implements OnInit {
  @Output() onNgOnInit = new EventEmitter<CkeditorCustomComponent>();
  @Input() appTextAreaMinHeight: string;

  public Editor: any = DecoupledEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private commonService: CommonService,
  ) {
    this.appTextAreaMinHeight = '300px';
  }

  ngOnInit(): void {
    this.onNgOnInit.emit(this);
  }

  public onReady(editor: any): void {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement(),
    );

    editor.plugins.get('FileRepository').createUploadAdapter = function(loader: any) {
      console.log('createUploadAdapter');
      return new UploadAdapter(loader);
    };
  }

  setEditorData(v: string): void {
    this.model.editorData = v;
    this.changeDetectorRef.detectChanges();
  }

  getEditorData(): string {
    return this.model.editorData;
  }
}




class UploadAdapter {
  loader: any;
  xhr: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then((file: File) => new Promise(((resolve, reject) => {
      this._initRequest();
      this._initListeners(resolve, reject, file);
      this._sendRequest(file);
    })));
  }

  _initRequest() {
    const xhr = this.xhr = new XMLHttpRequest();
    // 추후 실제 백엔드 api 로 변경 필요..
    xhr.open('POST', 'http://localhost:9020/api/file/upload', true);
    xhr.responseType = 'json';
  }

  _initListeners(resolve: any, reject: any, file: File) {
    const xhr = this.xhr;
    const genericErrorText = '파일을 업로드 할 수 없습니다.'

    xhr.addEventListener('error', () => {reject(genericErrorText)})
    xhr.addEventListener('abort', () => reject())
    xhr.addEventListener('load', () => {
      const response = xhr.response
      if (!response || response.error) {
        return reject( response && response.error ? response.error.message : genericErrorText );
      }

      resolve({
        // 추후 백엔드에서 응답 받은 url 로 변경 필요..
        default: 'https://post-phinf.pstatic.net/MjAxOTA5MDRfMjUg/MDAxNTY3NTgwODA0Mzc0.iHFgFwO3GUlDesyEQEyws63O1K5lV8FjL2PYXpwq01wg.VAMN6z_M8siRvYOnyWwIgGQdqWfpVxdtTmZYm9zREQUg.JPEG/GettyImages-1135693651.jpg?type=w1200',
      });
    });
  }

  _sendRequest(file: File) {
    const data = new FormData();
    // 추후 백엔드에서 요구하는 파리미터명으로 변경 필요할 수 있음..
    data.append('upfile', file);
    this.xhr.send(data);
  }
}
