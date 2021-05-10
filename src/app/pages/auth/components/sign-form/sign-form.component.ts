import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/consts';
import { AuthService } from '../../services';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss'],
})
export class SignFormComponent implements OnInit {
  public form: FormGroup;
  public Username: string;
  public Password: string;
  public Firstname: string;
  public Lastname: string;
  public Email: string;
  public Number: number;
  public routers: typeof routes = routes;
  public LoginData: { Username: string; Password: string };

  public ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.Username, [Validators.required]),
      email: new FormControl(this.Email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.Password, [Validators.required]),
      number: new FormControl(99999999),
      firstname: new FormControl(this.Firstname, [Validators.required]),
      lastname: new FormControl(this.Lastname, [Validators.required]),
    });
  }

  constructor(private service: AuthService, private router: Router) {}

  public sendSignForm(): void {
    if (this.form.valid) {
      this.LoginData.Username = this.form.value.username;
      this.LoginData.Password = this.form.value.password;
      console.log(this.form.value);
      this.service.createAdmin(this.form.value);
      console.log(this.LoginData);
      console.log(this.form.value.username);
      console.log(this.form.value.password);
      this.service.login(this.LoginData).subscribe((result) => {
        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          this.router.navigate([this.routers.DASHBOARD]).then();
        }
      });
    }
  }
}
