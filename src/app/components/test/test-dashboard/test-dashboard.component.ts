import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-dashboard.component.html',
  styleUrl: './test-dashboard.component.scss'
})
export class TestDashboardComponent implements OnInit {

  tests = [
    { id: 1, status: 'Pass' },
    { id: 2, status: 'Fail' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newTest(): void {
    this.router.navigate(['/new-test']);
  }
}
