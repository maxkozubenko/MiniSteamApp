import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/models/model';
@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBlockComponent {
  
  @Input() friends: Friend[] = [];
  @Input() users: Friend[] = [];

  // rejectFriend(email: string) {
  //   console.log(email);
  // }

  // confirmFriend(email: string) {
  //   console.log(email);
  // }

  // addFriend(email: string) {
  //   console.log(email);
  // }

  @Output() addFriend = new EventEmitter<string>();
  @Output() confirmFriend = new EventEmitter<string>();
  @Output() rejectFriend = new EventEmitter<string>();
  add(email: string) {
      this.addFriend.emit(email);
  }
  confirm(email: string) {
    this.confirmFriend.emit(email);
  }
  reject(email: string) {
      this.rejectFriend.emit(email);
  }
}
