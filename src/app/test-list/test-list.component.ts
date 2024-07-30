import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.scss'
})
export class TestListComponent implements OnInit {

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
