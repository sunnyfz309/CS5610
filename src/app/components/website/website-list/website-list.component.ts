import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../models/website.model.client';
import {WebsiteService} from '../../../service/website.service.client';
import {SharedService} from '../../../service/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  developerId: string;
  websites: Website[];

  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.websiteService.findWebsitesByUser(this.sharedService.user._id).subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        },
        (error: any) => console.log(error)
      );
    });
  }

}
