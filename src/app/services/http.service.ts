import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { toArray, take } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface userLoginInterface {
  email: string,
  password: string
}

export interface userResetInterface {
  nickname: string,
  email: string,
}

export interface tokenInterface {
  message: string,
  jwt_token: string
}

export interface paramInterface {
  price: number,
  indie: boolean,
  action: string,
  adventure: boolean
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
   }

  loginUser (userLogin: userLoginInterface){
    const res = this.http.post('api/auth/login', userLogin);

    res.subscribe(data => {
      const res = Object.entries(data)[1];
      if(res) {
        const token = Object.entries(data)[1][1];
        localStorage.setItem('id_token', token);
        this.router.navigate(['./games'])
      } else {
        console.log('Empty');
      }
    });
  }

  resetUserProfile(userReset: userResetInterface) {
    console.log(userReset);
    this.http.patch('api/auth/update', userReset).subscribe(
      res => { 
        console.log('received ok response from patch request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
      });
  }

  getGames$ () {
    const res$ = this.http.get('http://localhost:8080/api/games');
    return res$;
  }

  getGamesByTag$ (param: paramInterface) {
    const requestParam = `?price=${param.price*9}&indie=${param.indie}&action=${param.action}&adventure=${param.adventure}`;
    const res$ = this.http.get(`http://localhost:8080/api/games/filter${requestParam}`);
    return res$;
  }

  addGameToUser$ (gameId: string) {
    const res$ = this.http.post(`http://localhost:8080/api/user/games/add`, {gameId});
    return res$;
  }

  getUsersGames$ () {
    const res$ = this.http.get('http://localhost:8080/api/user/games');
    return res$;
  }

  findGame$ (gameName: string) {
    const requestParam = `?gameName=${gameName}`;
    const res$ = this.http.get(`http://localhost:8080/api/game/get${requestParam}`);
    return res$;
  }

  getFriends$ () {
    const res$ = this.http.get('http://localhost:8080/api/user/friends');
    return res$;
  }

  getAllUsers$ () {
    const res$ = this.http.get('http://localhost:8080/api/users/get');
    return res$;
  }

  confirmFriend$ (emailFriend: string) {
    const res$ = this.http.patch('http://localhost:8080/api/user/confirm/friend', {emailFriend});
    return res$;
  }

  addFriend$ (emailFriend: string) {
    const res$ = this.http.post('http://localhost:8080/api/user/add/friend', {emailFriend});
    return res$;
  }

  rejectFriend$ (emailFriend: string) {
    const res$ = this.http.patch('http://localhost:8080/api/user/reject/friend', {emailFriend});
    return res$;
  }
}
