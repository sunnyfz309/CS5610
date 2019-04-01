import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../../../../service/flickr.service.client';
import {WidgetService} from '../../../../../service/widget.service.client';
import {Widget} from '../../../../../models/widget.model.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  searchText: string;
  photos: [any];
  widgetId: string;
  widget: Widget;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private flickrService: FlickrService,
              private widgetService: WidgetService) {
    this.widget = new Widget('', '', '',
      1, '', '', '', '', false, null);
    this.photos = [null];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(params['wgid']).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        },
        (error: any) => console.log(error)
      );
    });
  }

  searchPhotos() {
    console.log('searching');
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          // let val = data._body;
          // val = val.replace('jsonFlickrApi(', '');
          // val = val.substring(0, val.length - 1);
          // val = JSON.parse(val);
          // console.log('search phones');
          this.photos = data.photos.photo;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    this.widgetService
      .updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: Widget) => {
          this.widget = data;
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        (error: any) => console.log(error)
      );
  }

}
