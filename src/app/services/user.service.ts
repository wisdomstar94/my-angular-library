import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ACCESS_TOKEN = 'access_token';
  REFRESH_TOKEN = 'refresh_token';

  constructor() {

  }


  /*
    AccessToken
  */
  setAccessToken(v: string): void {
    localStorage.setItem(this.ACCESS_TOKEN, v);
  }

  getAccessToken(): string {
    const token = localStorage.getItem(this.ACCESS_TOKEN);
    if (token === null) {
      return '';
    }
    return token;
  }

  removeAccessToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }


  /*
    RefreshToken
  */
  setRefreshToken(v: string): void {
    localStorage.setItem(this.REFRESH_TOKEN, v);
  }

  getRefreshToken(): string {
    const token = localStorage.getItem(this.REFRESH_TOKEN);
    if (token === null) {
      return '';
    }
    return token;
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
