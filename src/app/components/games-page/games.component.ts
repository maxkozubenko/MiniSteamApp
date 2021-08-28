import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

export interface gameInterface {
  name: string,
  price: string,
  description: string,
  img: string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games: any;
  myForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      "price": new FormControl(0),      
      "indie": new FormControl(true),
      "action": new FormControl(true),
      "adventure": new FormControl(true),
    });
  }

  ngOnInit(): void {
    this.httpService.getGames$().subscribe(games => {
        this.games = Object.values(games);
    });
  }

  getGamesByTags() {
    this.httpService.getGamesByTag(this.myForm.value).subscribe(games => {
      this.games = Object.values(games);
    });
  }
}
