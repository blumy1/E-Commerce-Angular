import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginService.authenticate(this.username, this.password);
  }

}
