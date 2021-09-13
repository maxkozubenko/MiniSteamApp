import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
