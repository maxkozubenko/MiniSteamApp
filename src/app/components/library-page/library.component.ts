import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { gameInterface } from '../../models/model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public games: gameInterface[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsersGames$().subscribe(games => {
      console.log(games);
      this.games = Object.values(games);
    });
  }

  alertWindow() {
    alert('The game is not realese');
  }

}
