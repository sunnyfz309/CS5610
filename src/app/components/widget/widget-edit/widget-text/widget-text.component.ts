import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../service/widget.service.client';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  widgetId: string;
  widget: Widget;
  flag = false; // setting error flag as false by default
  error: string;
  alert: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) {
    this.widget = new Widget('', '', '',
      1, '', '', '', '', false, null);
  }

  ngOnInit() {

    // initialize error and alert text
    this.error = 'Enter the required field';
    this.alert = '* Enter the required fields';

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

  updateWidget() {
    if (this.widget['name'] === undefined) {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.widgetId, this.widget).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        (error: any) => console.log(error)
      );
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe(
      () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (error: any) => console.log(error)
    );
  }

}
