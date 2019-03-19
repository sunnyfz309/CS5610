import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {

  constructor(private _http: HttpClient) {}

  baseUrl = environment.baseUrl;

  createWidget(pageId: string, widget: Widget) {
    return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget);
  }

  findWidgetsByPageId(pageId: string) {
    return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget');
  }

  findWidgetById(widgetId: string) {
    return this._http.get(this.baseUrl + '/api/widget/' + widgetId);
  }

  updateWidget(widgetId: string, widget: Widget) {
    return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget);
  }

  deleteWidget(widgetId: string) {
    return this._http.delete(this.baseUrl + '/api/widget/' + widgetId);
  }

  reorderWidgets(startIndex, endIndex, pageId) {

    // const url = 'http://localhost:3200/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    const url = 'https://webdev-zhe-cs5610.herokuapp.com' + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
    return this._http.put(url, '');
  }

}

