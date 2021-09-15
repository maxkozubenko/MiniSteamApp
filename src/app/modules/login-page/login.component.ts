import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    myForm: FormGroup;

    constructor(private httpService: HttpService) {
        this.myForm = new FormGroup({
            email: new FormControl('max@com', [Validators.required, Validators.email]),
            password: new FormControl('qwerty', Validators.required),
        });
    }

    authUser(): void {
        this.httpService.loginUser(this.myForm.value);
    }
}
