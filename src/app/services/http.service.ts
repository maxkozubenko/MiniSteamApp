import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
    UserLoginInterface,
    UserResetInterface,
    ParamInterface,
    Friend,
    GameInterface,
} from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    loginUser(userLogin: UserLoginInterface) {
        return this.http.post('api/auth/login', userLogin);
    }

    resetUserProfile(userReset: UserResetInterface) {
        return this.http.patch('api/auth/update', userReset);
    }

    getGames(): Observable<GameInterface> {
        return this.http.get<GameInterface>('api/games');
    }

    getGamesByTag(param: ParamInterface): Observable<GameInterface> {
        const params = new HttpParams()
            .set('price', param.price * 9)
            .set('indie', param.indie)
            .set('action', param.action)
            .set('adventure', param.adventure);

        return this.http.get<GameInterface>(`api/games/filter`, { params });
    }

    addGameToUser(gameId: string): Observable<string> {
        return this.http.post<string>(`api/user/games/add`, { gameId });
    }

    getUsersGames(): Observable<GameInterface> {
        return this.http.get<GameInterface>('api/user/games');
    }

    findGame(gameName: string): Observable<GameInterface[]> {
        const requestParam = `?gameName=${gameName}`;
        return this.http.get<GameInterface[]>(`api/game/get${requestParam}`);
    }

    getFriends(): Observable<Friend> {
        return this.http.get<Friend>('api/user/friends');
    }

    getAllUsers(): Observable<Friend> {
        return this.http.get<Friend>('api/users/get');
    }

    confirmFriend(emailFriend: string): Observable<Friend> {
        return this.http.patch<Friend>('api/user/confirm/friend', { emailFriend });
    }

    addFriend(emailFriend: string): Observable<Friend> {
        return this.http.post<Friend>('api/user/add/friend', { emailFriend });
    }

    rejectFriend(emailFriend: string): Observable<Friend> {
        return this.http.patch<Friend>('api/user/reject/friend', { emailFriend });
    }
}
