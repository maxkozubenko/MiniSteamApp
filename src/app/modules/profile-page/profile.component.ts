import { Component }  from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  myForm: FormGroup;

  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      nickname: new FormControl('', [
        Validators.required
      ]),      
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
    });
  }

  resetInfo(): void {
    this.httpService.resetUserProfile(this.myForm.value).subscribe(
      res => { 
        console.log('received ok response from patch request');
      },
      error => {
        console.error('There was an error during the request');
        console.log(error);
    });
  }

}
