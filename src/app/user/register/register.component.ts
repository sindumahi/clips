import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Iuser from 'src/app/models/user.models';
import { RegisterValidators } from '../Validators/register-validators';
import { Emailtaken } from '../Validators/emailtaken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private auth: AuthService,
    private Emailtaken: Emailtaken
  ) { }

  insubmission = false
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  phoneno = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(15)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.Emailtaken.validate])
  password = new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ])
  confirm_password = new FormControl('', [
    Validators.required
  ])

  RegisterForm = new FormGroup({
    name: this.name,
    age: this.age,
    phoneno: this.phoneno,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password

  }, [RegisterValidators.match('password', 'confirm_password')])

  ShowAlert = false
  alertcolor = 'blue'
  AlertMsg = 'Please Wait Your Account is being Created..'

  async register() {
    this.ShowAlert = true,
      this.alertcolor = 'blue',
      this.AlertMsg = 'Please Wait Your Account is being Created..'
    this.insubmission = true
    try {
      await this.auth.createuser(this.RegisterForm.value as Iuser)
    }

    catch (e) {
      console.error

      this.AlertMsg = 'An error occured please try again after sometime'
      this.alertcolor = 'red'
      this.insubmission = false
      return
    }
    this.AlertMsg = 'Sucess! Your account has been created'
    this.alertcolor = 'green'
  }
}
