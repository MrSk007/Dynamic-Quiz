import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AuthService } from '../../services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AvatarModule, AvatarGroupModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute = "";
  isDropdownVisible = false;

  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeDropdown()
  {
    this.isDropdownVisible = false;
  }

  logout() {
    console.log('User logged out');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToDashboard()
  {
    this.router.navigate(['/dashboard']);
  }
}
