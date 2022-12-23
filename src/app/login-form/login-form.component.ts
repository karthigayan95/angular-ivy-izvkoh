import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private apiCall: ApiCallService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    const obsv$ = new Observable((obs) => {
      obs.error('test error');
      obs.next('100');
    });
    obsv$.subscribe(
      (sub) => {
        console.log(sub);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get f() {
    return this.loginForm.controls;
  }
  login(value: any) {
    this.apiCall.save(value).subscribe(
      (sub) => {
        console.log(sub);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(value);
  }
}
