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

  constructor() { }

  rejectFriend(email: string) {
    console.log(email);
  }
}
