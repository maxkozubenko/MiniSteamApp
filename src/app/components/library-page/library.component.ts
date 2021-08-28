import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public games: any;

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
