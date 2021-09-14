import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat, forkJoin } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Friend } from '../../models/model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];
  users: Friend[] = [];

  myForm: FormGroup;
  router: any;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      emailFriend: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getFriends();
    // this.getAllUsers();
  }

  getAllUsers(): void {
    this.httpService.getAllUsers().subscribe(user => {
      this.users = Object.values(user);
    });
    console.log('Get All Users', this.users);
  }

  confirmFriend(emailFriend: string): void {
    this.httpService.confirmFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.getFriends();
      this.getAllUsers();
    });
    console.log('Confirm Friend', this.friends);
  }

  addFriend(emailFriend: string): void {
    this.httpService.addFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.getFriends();
      this.getAllUsers();
    });
    console.log('Add Friend', this.friends);
  }

  rejectFriend(emailFriend: string): void {
    this.httpService.rejectFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.getFriends();
      this.getAllUsers();
    });
    console.log('Reject Friend', this.friends);
  }

  getFriends(): void {
    this.httpService.getFriends().subscribe(friend => {
      this.friends = Object.values(friend);
    });
    console.log('Get Friend', this.friends);
  }
  
}
