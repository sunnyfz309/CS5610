import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {environment} from '../../environments/environment';
import {environment} from '../../environments/environment.prod';


@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createUser(user: User) {
    return this._http.post(this.baseUrl + '/api/user', user);
  }

  findUserById(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId);
  }

  findUserByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/user/?username=' + username);
  }

  findUserByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password);
  }

  updateUser(userId: string, user: User) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user);
  }

  deleteUser(userId: String) {
    return this._http.delete<User>(this.baseUrl + '/api/user/' + userId);
  }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + '/api/login', body, { withCredentials: true });
  }

  logout() {
    return this._http.post(this.baseUrl + '/api/logout', '', { withCredentials: true });
  }

  register(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + '/api/user', body);
  }

}
