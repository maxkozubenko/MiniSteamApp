import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class GamesGuard implements CanActivate {
    canActivate(): Observable<boolean> | boolean {
        return Boolean(localStorage.getItem('id_token'));
    }
}
