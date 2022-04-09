import { Injectable } from '@angular/core';

export interface FileNameAndTypeInfo {
  name: string;
  type: string;
}

export type ItemIndexPosition = 'first-index' | 'last-index' | 'between';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {

  }

  checkChildDomChange(target: any, callback: () => void): MutationObserver {
    // 감시자 인스턴스 만들기
    let observer = new MutationObserver((_mutations) => {
      // 노드가 변경 됐을 때의 작업
      callback();
    });

    // 감시자의 설정
    let option = {
      attributes: true,
      childList: true,
      characterData: true
    };

    // 대상 노드에 감시자 전달
    observer.observe(target, option);
    return observer; // 추후 observer.disconnect() 로 구독 해제 해주어야 합니다.
  }

  getFileNameAndTypeInfo(fileName: string): FileNameAndTypeInfo {
    const returnResult: FileNameAndTypeInfo = {
      name: '',
      type: '',
    };

    const fileNameDotSplit = fileName.split('.'); // ex) ['aaa'] or ['aa', 'a', 'png']

    if (fileNameDotSplit.length === 1) {
      // 확장자가 없는 경우
      returnResult.name = fileNameDotSplit[0];
      returnResult.type = '';
      return returnResult;
    }

    if (fileNameDotSplit.length === 2) {
      returnResult.name = fileNameDotSplit[0];
      returnResult.type = fileNameDotSplit[1];
      return returnResult;
    }

    const onlyFileNames = fileNameDotSplit.filter((_value, index) => {
      if (index !== fileNameDotSplit.length - 1) {
        return true;
      }

      return false;
    });

    returnResult.name = onlyFileNames.join('.');
    returnResult.type = fileNameDotSplit[fileNameDotSplit.length - 1];

    return returnResult;
  }

  myGetRandomNumber(params: {
    min: number;
    max: number;
  }): number {
    return Math.floor(Math.random() * (params.max - params.min + 1)) + params.min;
  }

  myGetRandomString(params: {
    str_length: number;
  }): string {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < params.str_length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getToken(params: {
    strlength: number;
  }): string {
    const timestamp = new Date().getTime();
    const timestamp_length = timestamp.toString().length;
    const str_max_length = params.strlength - timestamp_length;
    const first_length = this.myGetRandomNumber({
      min: 1,
      max: str_max_length
    });
    const second_length = str_max_length - first_length;
    return ''.concat(
      this.myGetRandomString({
        str_length: first_length
      }),
      new Date().getTime().toString(),
      this.myGetRandomString({
        str_length: second_length
      })
    );
  }

  addComma(v: number | string): string {
    let returnValue = '';
    if (typeof v === 'number') {
      returnValue = v.toString().replace(/,/gi, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (typeof v === 'string') {
      returnValue = v.replace(/,/gi, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return returnValue;
  }

  getPureNumber(v: number | string): number {
    if (typeof v === 'number') {
      return v;
    }

    if (typeof v === 'string') {
      return Number(v.replace(/,/gi, ''));
    }

    return Number(v);
  }

  checkItemIndexPosition(item: any, items: any[]): ItemIndexPosition {
    let itemIndex = -1;

    let index = 0;
    for (const inItem of items) {
      if (item === inItem) {
        itemIndex = index;
        break;
      }
      index++;
    }

    if (itemIndex === 0) {
      return 'first-index';
    }

    if (itemIndex === items.length - 1) {
      return 'last-index';
    }

    return 'between';
  }

  isBetweenNumber(start: number, target: number, end: number): boolean {
    return target >= start && target <= end;
  }
}
