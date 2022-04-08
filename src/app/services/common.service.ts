import { Injectable } from '@angular/core';

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

}
