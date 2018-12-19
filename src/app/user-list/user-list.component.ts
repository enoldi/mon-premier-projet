import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: UserModel[];
  userSubcription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubcription = this.userService.userSubject.subscribe(
      (users: UserModel[]) => {
        this.users = users;
      }
    );

    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubcription.unsubscribe();
  }

}
