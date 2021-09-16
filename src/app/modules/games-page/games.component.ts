import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { GameInterface } from '../../models/model';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
    games: GameInterface[] = [];

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

    getGamesByTags(): void {
        this.httpService.getGamesByTag(this.myForm.value).subscribe((games) => {
            this.games = Object.values(games);
        });
    }

    addGameUser(gameId: string): void {
        this.httpService.addGameToUser(gameId).subscribe((data) => alert(`Game ${data} was added`));
    }

    getGameByName(): void {
        this.httpService.findGame(this.gameForm.value.name).subscribe((games) => {
            if (Object.keys(games).length === 0 && games.constructor === Object) {
                this.getGames();
            } else {
                this.games = games;
            }
        });
    }

    getGames(): void {
        this.httpService.getGames().subscribe((games) => {
            this.games = Object.values(games);
        });
    }
}
