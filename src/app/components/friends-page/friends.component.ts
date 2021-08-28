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
  myForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      "emailFriend": new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.httpService.getFriends$().subscribe(friend => {
      this.friends = Object.values(friend);
    });
  }

  getAllUsers() {
    this.httpService.getAllUsers$().subscribe(friend => {
      console.log(friend);
      this.friends = Object.values(friend);
    });
  }

  // addFriend() {
    // this.httpService.getGamesByTag$(this.myForm.value.emailFriend).subscribe(friend => {
    //   this.friends = Object.values(friend);
    // });
  // }

}
