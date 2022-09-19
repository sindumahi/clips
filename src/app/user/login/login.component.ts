import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }
  ShowAlert = false
  AlertMsg = 'Please wait we are logging you in!'
  alertcolor = 'blue'
  insubmission = false

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login() {
  this.ShowAlert = true
  this.AlertMsg = 'Please wait we are logging you in!'
  this.alertcolor = 'blue'
  this.insubmission = true
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch (e) {
      this.AlertMsg = 'An error Ocurred please try after some time!'
      this.alertcolor = 'red'
      this.insubmission=false
      return
    }

    this.AlertMsg='Success! You are logged in'
    this.alertcolor='green'
  }
}
