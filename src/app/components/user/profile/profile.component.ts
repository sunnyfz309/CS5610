import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../service/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  userId: string;
  updateFlag = false;
  updateMsg = 'Profile updated!';
  errorFlag = false;
  errorMsg = 'Username and Password cannot be empty!';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
    this.user = new User('', '', '', '', '');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.userService.findUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => console.log('PROFILE:\n' + error)
      );
    });
  }

  updateUser() {
    if (this.user.username && this.user.password) {
      this.userService.updateUser(this.userId, this.user).subscribe(
        (user: User) => {
          this.user = user;
          this.updateFlag = true;
        },
        (error: any) => console.log(error));
    } else {
      this.errorFlag = true;
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error: any) => console.log(error)
    );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login']),
        (error: any) => console.log(error)
      );
  }

}
