import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SafeUrlPipe } from '../../../pipes';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { USER_NAME, USER_PWD } from '../../../constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, PasswordModule, NavbarComponent,SafeUrlPipe,ProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  imageURL = "https://1.bp.blogspot.com/-Y12GC2d-iXE/XpyRg-3tN4I/AAAAAAAAAds/9IHtkkSADK4E-a9bP2wZSegpx4H1KonEQCLcBGAsYHQ/s1600/Quiz_7.png";
  loginError: boolean = false;
  showLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.loginForm = this.fb.group({
      username: [USER_NAME, Validators.required],
      password: [USER_PWD, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    setTimeout(() => {
      this.showLogin = true;
    }, 1000);
  }

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username, password)) {
        this.router.navigate(['/']);
      } else {
        this.loginError = true;
        this.authService.logout();
      }
    }
  }
}
