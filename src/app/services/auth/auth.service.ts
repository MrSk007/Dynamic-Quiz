import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../localStore/local-storage.service';
import { AUTH_KEY, USER_NAME, USER_PWD } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private username = USER_NAME;
  private password = USER_PWD;
  private token = 'token';

  constructor(
    private storageService: LocalStorageService) {
  }

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.isAuthenticatedSubject.next(true);
      this.storageService.setItem(AUTH_KEY, this.token);
      return true;
    }
    return false;
  }

  logout(): void {
    this.storageService.removeItem(AUTH_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  isUserAuthenticated(): boolean {
    if (this.storageService.getItem(AUTH_KEY) == this.token) {
      return true;
    } else {
      return false;
    }
  }
}
