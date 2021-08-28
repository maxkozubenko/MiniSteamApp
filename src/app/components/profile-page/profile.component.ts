import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myForm: FormGroup;
  constructor(private httpService: HttpService) {
    this.myForm = new FormGroup({
      "nickname": new FormControl('', [
        Validators.required
      ]),      
      "email": new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
    });
  }

  ngOnInit(): void {
  }

  resetInfo() {
    console.log("SEnded")
    this.httpService.resetUserProfile(this.myForm.value);
  }

}
