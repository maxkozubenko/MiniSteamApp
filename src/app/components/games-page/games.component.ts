import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { gameInterface} from '../../models/model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: gameInterface[] = [];

  myForm: FormGroup;
  gameForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      price: new FormControl(0),      
      indie: new FormControl(true),
      action: new FormControl(true),
      adventure: new FormControl(true),
    });

    this.gameForm = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getGames();
  }

  getGamesByTags() {
    this.httpService.getGamesByTag$(this.myForm.value).subscribe(games => {
      this.games = Object.values(games);
    });
  }

  addGameUser(gameId: string) {
    this.httpService.addGameToUser$(gameId).subscribe(data => alert(`Game ${data} was added`));
  }

  getGameByName() {
    this.httpService.findGame$(this.gameForm.value.name).subscribe(games => {
      if(Object.keys(games).length === 0 && games.constructor === Object) {
        this.games = [];
      } else {
        this.games = games as gameInterface[];
      }
    });
  }

  getGames() {
    this.httpService.getGames$().subscribe(games => {
      this.games = Object.values(games);
    });
  }
  
}
