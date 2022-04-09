import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { UserService } from './user.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';

export type HttpMethodType = 'get' | 'post' | 'put' | 'delete' | 'option';
export type HttpContentType = 'default' | 'form-data' | 'x-www-form-urlencoded' | 'json';

export interface RequestOption {
  url: string;
  method: HttpMethodType;
  data: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  contentType?: HttpContentType;
  params?: HttpParams | {
    [param: string]: string | number | boolean;
  };
  reportProgress?: boolean;
  withCredentials?: boolean;
  isAuth?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: "body";
  params?: HttpParams;
  reportProgress?: boolean;
  // responseType?: string;
  withCredentials?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {

  }

  getObservable(requestOption: RequestOption): Observable<any> {
    let httpObservable = this.getHttpObservable(requestOption);

    if (requestOption.isAuth === true) {
      httpObservable = httpObservable.pipe(
        catchError((error) => {
          // refresh token 이 클라이언트에 없는 경우
          if (this.userService.getRefreshToken() === null || this.userService.getRefreshToken() === '') {
            // 에러 반환하고 종료
            return of(error.error);
          }

          // refresh token 으로 access token 재발급 시도
          return this.refreshAccessToken();
        }),
        mergeMap((value) => {
          if (value === true) {
            return this.getHttpObservable(requestOption);
          }

          return of(value);
        }),
      );
    }

    return httpObservable;
  }

  private getHttpObservable(requestOption: RequestOption): Observable<any> {
    /*
      ※ header 셋팅
    */
    let headers = new HttpHeaders({
      // 모든 요청에 담길 공통 header 작성
    });
    if (requestOption.headers instanceof HttpHeaders) {
      for (const key of requestOption?.headers.keys()) {
        headers = headers.set(key, requestOption?.headers.get(key)!);
      }
    } else if (typeof requestOption?.headers === 'object') {
      for (const key of Object.keys(requestOption?.headers)) {
        headers = headers.set(key, requestOption?.headers[key]);
      }
    }

    /*
      ※ content-type 셋팅
    */
    let contentType: HttpContentType = 'x-www-form-urlencoded';
    if (typeof requestOption.contentType === 'string') {
      contentType = requestOption.contentType;
    }

    switch (contentType) {
      case 'x-www-form-urlencoded':
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        if (typeof requestOption.data === 'object') {
          let wwwFormUrlEncodedData = new URLSearchParams();
          const keys = Object.keys(requestOption.data);
          for (const key of keys) {
            wwwFormUrlEncodedData.set(key, requestOption.data[key]);
          }
          // requestOption.data = wwwFormUrlEncodedData;
          requestOption.data = wwwFormUrlEncodedData.toString();
        }
        break;
      case 'form-data':
        headers = headers.set('Content-Type', 'multipart/form-data');
        break;
      case 'json':
        headers = headers.set('Content-Type', 'application/json');
        break;
      case 'default':

        break;
    }

    /*
      ※ withCredentials 셋팅
    */
    let withCredentials = false;
    if (typeof requestOption.withCredentials === 'boolean') {
      withCredentials = requestOption.withCredentials;
    }

    /*
      ※ query parameter 셋팅
    */
    let params = new HttpParams();
    if (requestOption?.params instanceof HttpParams) {
      for (const key of requestOption?.params.keys()) {
        params = params.set(key, requestOption?.params.get(key)!);
      }
    } else if (typeof requestOption?.params === 'object') {
      for (const key of Object.keys(requestOption?.params)) {
        params = params.set(key, requestOption?.params[key]);
      }
    }

    /*
      ※ auth 체크
    */
    if (requestOption.isAuth === true) {
      headers = headers.set('Authorization', 'Bearer ' + this.userService.getAccessToken());
    }

    /*
      httpOptions 할당
    */
    const httpOptions: HttpOptions = {
      headers: headers,
      params: params,
      withCredentials: withCredentials,
    };

    /*
      observable 할당
    */
    let observable: Observable<any> = of();
    switch (requestOption.method) {
      case 'get':
        observable = this.http.get(requestOption.url, httpOptions);
        break;
      case 'post':
        observable = this.http.post(requestOption.url, requestOption.data, httpOptions);
        break;
      case 'put':
        observable = this.http.put(requestOption.url, requestOption.data, httpOptions);
        break;
      case 'delete':
        observable = this.http.delete(requestOption.url, httpOptions);
        break;
      case 'option':
        observable = this.http.options(requestOption.url, httpOptions);
        break;
    }

    return observable;
  }

  private refreshAccessToken(): Observable<boolean> {
    const refreshToken = this.userService.getRefreshToken();
    return this.getHttpObservable({
      url: 'refresh 하는 api url을 입력하세요.',
      method: 'post',
      headers: new HttpHeaders({
        refreshtoken: refreshToken,
      }),
      data: {
        // ...
      },
      isAuth: true,
    }).pipe(
      catchError((error) => {
        // 로그아웃 하는 코드 작성..
        console.error(error);
        return of(false);
      }),
      map((value: any) => {
        if (value.code !== 0) {
          // 로그아웃 하는 코드 작성..

          return false;
        }

        this.userService.setAccessToken(value.data.accessToken);
        return true;
      })
    );
  }
}
