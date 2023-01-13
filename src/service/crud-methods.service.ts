import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudMethodsService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = 'https://retoolapi.dev/IBG7hA/userManager';
    return this.httpClient.get(url) as Observable<User[]>;
  }

  getUser(id: number): Observable<User> {
    const url = 'https://retoolapi.dev/IBG7hA/userManager/' + id;
    return this.httpClient.get(url) as Observable<User>;
  }

  createUser(user: User) {
    const url = 'https://retoolapi.dev/IBG7hA/userManager/';
    return this.httpClient.post(url, user);
  }

  updateUser(user: User) {
    const url = 'https://retoolapi.dev/IBG7hA/userManager/' + user.id;
    return this.httpClient.put(url, user);
  }

  deleteUser(userId: number) {
    const url = 'https://retoolapi.dev/IBG7hA/userManager/' + userId;
    return this.httpClient.delete(url);
  }
}
