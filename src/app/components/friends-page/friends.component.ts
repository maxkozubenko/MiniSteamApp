import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends: any;
  public users: any[] = [];
  myForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      "emailFriend": new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.httpService.getFriends$().subscribe(friend => {
      this.friends = Object.values(friend);
      // this.getAllUsers();
    });
  }

  getAllUsers() {
    this.httpService.getAllUsers$().subscribe(user => {
      this.users = Object.values(user);
      console.log(this.users);
    });
  }

  confirmFriend(emailFriend: string) {
    this.httpService.confirmFriend$(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.ngOnInit();
    });
  }

  addFriend(emailFriend: string) {
    this.httpService.addFriend$(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.ngOnInit();
    });
  }

  rejectFriend(emailFriend: string) {
    this.httpService.rejectFriend$(emailFriend).subscribe(friend => {
      this.friends = Object.values(friend);
      this.ngOnInit();
    });
  }
}
