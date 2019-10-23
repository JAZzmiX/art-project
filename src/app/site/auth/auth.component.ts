import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error: string = null;
  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).subscribe(() =>
      this.router.navigateByUrl('/admin')
    );
    console.log(form.value);
    form.reset();
  }

  onLogout() {
    this.authService.logout();
  }
}
