import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class WebsiteService {

  constructor(private _http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createWebsite(userId: string, website: Website) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website);
  }

  findWebsitesByUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website');
  }

  findWebsiteById(websiteId: string) {
    return this._http.get(this.baseUrl + '/api/website/' + websiteId);
  }

  updateWebsite(websiteId: string, website: Website) {
    return this._http.put(this.baseUrl + '/api/website/' + websiteId, website);
  }

  deleteWebsite(websiteId: string) {
    return this._http.delete(this.baseUrl + '/api/website/' + websiteId);
  }
}
