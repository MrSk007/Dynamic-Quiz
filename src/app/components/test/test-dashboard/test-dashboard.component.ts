import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Test } from '../../../models';
import { LocalStorageService } from '../../../services';
import { TEST_RESULT_KEY } from '../../../constants';

@Component({
  selector: 'app-test-dashboard',
  standalone: true,
  imports: [CommonModule,ButtonModule, TableModule],
  templateUrl: './test-dashboard.component.html',
  styleUrl: './test-dashboard.component.scss'
})
export class TestDashboardComponent implements OnInit {

  tests: Test[] = [
    { id: 1, status: 'Pass', marks: 7, totalMarks: 10, completed: new Date('2024-07-30T10:00:00Z') },
    { id: 2, status: 'Fail', marks: 4, totalMarks: 10, completed: new Date('2024-07-30T11:00:00Z') }
  ];


  constructor(private router: Router,private storageService:LocalStorageService) { }

  ngOnInit(): void {
    if(!this.storageService.getItem(TEST_RESULT_KEY))
    {
      this.storageService.setItem(TEST_RESULT_KEY,this.tests);
    }
    else{
      this.tests = this.storageService.getItem(TEST_RESULT_KEY) as Test[];
    }
  }

  newTest(): void {
    this.router.navigate(['/new-test']);
  }
}
