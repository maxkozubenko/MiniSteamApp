import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

export interface gameInterface {
  name: string,
  price: string,
  description: string,
  img: string,
  _id: string,
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games: gameInterface[] = [];
  myForm: FormGroup;
  gameForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      "price": new FormControl(0),      
      "indie": new FormControl(true),
      "action": new FormControl(true),
      "adventure": new FormControl(true),
    });

    this.gameForm = new FormGroup({
      "name": new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.httpService.getGames$().subscribe(games => {
        this.games = Object.values(games);
    });
    console.log(this.games);
  }

  getGamesByTags() {
    this.httpService.getGamesByTag$(this.myForm.value).subscribe(games => {
      this.games = Object.values(games);
    });
  }

  addGameUser(gameId: string) {
    this.httpService.addGameToUser$(gameId).subscribe(data => console.log('DONE', data));
  }

  getGameByName() {
    this.httpService.findGame$(this.gameForm.value.name).subscribe(game => {
      if(Object.keys(game).length === 0 && game.constructor === Object) {
        this.games = [];
      } else {
        this.games = Object.values(game);
      }
    });
  }
}
