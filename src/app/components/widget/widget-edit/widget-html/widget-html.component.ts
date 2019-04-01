import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../service/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  widgetId: string;
  widget: Widget;
  error: string;
  alert: string;
  flag = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) {
    this.widget = new Widget('', '', '',
      1, '', '', '', '', false, null);
  }

  ngOnInit() {

    // initialize error and alert text
    this.error = 'Enter the name of the widget';
    this.alert = '* Enter the widget name';

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
    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.widget['name'] === '') {
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
