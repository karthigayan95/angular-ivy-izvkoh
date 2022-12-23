import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
