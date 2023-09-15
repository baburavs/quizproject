// src/app/quiz.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  getQuizData(): Observable<Question[]> {
    return this.http.get<Question[]>('https://raw.githubusercontent.com/ShaneWatson7961/quizData/main/quizInterview.json');
  }
}

interface Question {
  queType: string;
  type: string;
  question: string;
  options: string[];
  subQue?: SubQuestion[];
}

interface SubQuestion {
  queType: string;
  showIf: string;
  type: string;
  question: string;
  options: string[];
}
