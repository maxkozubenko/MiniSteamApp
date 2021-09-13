import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Friend } from 'src/app/models/model';
@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBlockComponent {
  
  @Input() friends: Friend[] = [];
  @Input() users: Friend[] = [];

  rejectFriend(email: string) {
    console.log(email);
  }

  confirmFriend(email: string) {
    console.log(email);
  }

  addFriend(email: string) {
    console.log(email);
  }
}
