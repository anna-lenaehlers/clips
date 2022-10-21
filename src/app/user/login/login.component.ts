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

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';
  inSubmission = false;

  async login() {
    this.showAlert = true;
    this.alertColor = 'Please wait! You\'re being logged in.';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
      
    } catch(e) {
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again.'
      this.alertColor = "red";

      return;
    }
    
    this.alertMsg = "Success! You are now logged in!";
    this.alertColor = "green";
  }

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
