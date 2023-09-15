import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.css']
})
export class MainQuizComponent implements OnInit {
  questions: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuizData().subscribe((data: any[]) => {
      this.questions = data;
    });
  }
}
