import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cloud-test-app';

  public users: User[];

  constructor(
      public userService: UserService
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe((users) => {
      this.users = users;
    })
  }

}
