import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../../services';

@Component({
  selector: 'app-new-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-test.component.html',
  styleUrl: './new-test.component.scss'
})
export class NewTestComponent implements OnInit {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  answers: { [key: number]: string } = {};

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(data => {
      this.questions = data;
      this.loadQuestion();
    });
  }

  loadQuestion(): void {
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult();
    }
  }

  answerQuestion(answer: string): void {
    this.answers[this.questions[this.currentQuestionIndex].id] = answer;
    this.nextQuestion();
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    this.loadQuestion();
  }

  skipQuestion(): void {
    this.nextQuestion();
  }

  showResult(): void {
    const correctAnswers = Object.values(this.answers).filter(answer => answer === 'Yes').length;
    const status = correctAnswers >= 7 ? 'Pass' : 'Fail';

    alert(`No. of questions attempted: ${Object.keys(this.answers).length}\nStatus: ${status}`);
    this.router.navigate(['/']);
  }
}
