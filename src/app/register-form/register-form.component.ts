import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  name: string = 'karthik';
  constructor() {}

  ngOnInit() {}
  getResponse($event: any) {
    this.name = $event;
  }
}
