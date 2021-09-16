import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    myForm: FormGroup;

    constructor(private httpService: HttpService, private router: Router) {
        this.myForm = new FormGroup({
            email: new FormControl('max@com', [Validators.required, Validators.email]),
            password: new FormControl('qwerty', Validators.required),
        });
    }

    authUser(): void {
        this.httpService.loginUser(this.myForm.value).subscribe((data) => {
            const res2 = Object.entries(data)[1];
            if (res2) {
                const token = Object.entries(data)[1][1];
                localStorage.setItem('id_token', token);
                this.router.navigate(['./games']);
            } else {
                console.log('Empty');
            }
        });
    }
}
