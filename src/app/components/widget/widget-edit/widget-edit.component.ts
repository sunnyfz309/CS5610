import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../service/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  widget: Widget;

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService) {
    this.widget = new Widget('', '', '',
      1, '', '', '', '', false, null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.widgetService.findWidgetById(params['wgid']).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        },
        (error: any) => console.log(error)
      );
    });
  }

}
