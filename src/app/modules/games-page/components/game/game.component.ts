import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { GameInterface } from 'src/app/models/model';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  @Input() games:GameInterface[] = [];

  addGameUser(gameId: string) {
    console.log(gameId);
  }
}
