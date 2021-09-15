import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { GameInterface } from '../../models/model';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
    games: GameInterface[] = [];

    constructor(private httpService: HttpService) {}

    ngOnInit(): void {
        this.getUsersGame();
    }

    alertWindow(): void {
        alert('The game is not apply');
    }

    getUsersGame(): void {
        this.httpService.getUsersGames().subscribe((games) => {
            this.games = Object.values(games);
        });
    }
}
