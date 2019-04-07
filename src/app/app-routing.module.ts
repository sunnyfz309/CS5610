import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './service/auth-gaurd.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'profile/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
