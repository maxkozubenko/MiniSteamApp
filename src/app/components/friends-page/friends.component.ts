import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat, forkJoin } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Friend } from '../../models/model'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];
  users: Friend[] = [];

  myForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      emailFriend: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getFriends();
  }

  getAllUsers(): void {
    this.httpService.getAllUsers().subscribe(user => {
      this.users = Object.values(user);
    });
    // this.getFriends();
  }

  confirmFriend(emailFriend: string): void {
    this.httpService.confirmFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
    });
    // this.getFriends();
  }

  addFriend(emailFriend: string): void {
    this.httpService.addFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
    });
    // this.getFriends();
  }

  rejectFriend(emailFriend: string): void {
    this.httpService.rejectFriend(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
    });
    // this.getFriends();
  }

  getFriends(): void {
    // this.httpService.getFriends().subscribe(friend => {
    //   this.friends = Object.values(friend);
    // });

    forkJoin({
      users: this.httpService.getAllUsers(),
      friends: this.httpService.getFriends(),
    }).subscribe(data => {
      this.friends = [data.friends];
      this.users = [data.users];
      console.log('Friends', this.friends);
      console.log('Users', this.users);
    });
  }
  
}
