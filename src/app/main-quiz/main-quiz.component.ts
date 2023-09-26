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
    this.questions=[
      {
          "queType":"Main",
          "type":"dropdown",
          "question":"Which company was established in 1976 by Steve Jobs ?",
          "options":["Apple","Microsoft","Atari"],
          "subQue":[
              {
                  "queType":"Sub",
                  "showIf":"Apple",
                  "type":"dropdown",
                  "question":"What is the most common way to iterate through an array ?",
                  "options":["For loop","If Statements"]
              },
              {
                  "queType":"Sub",
                  "showIf":"Apple",
                  "type":"textinput",
                  "question":"Which type of code is represented in 0 and 1 ?",
                  "options":[]
              },
              {
                "queType":"Sub",
                "showIf":"Atari",
                "type":"textinput",
                "question":"What is the through an array ?",
                "options":[]
            },
            {
              "queType":"Sub",
              "showIf":"Microsoft",
              "type":"textinput",
              "question":"through an array ?",
              "options":[]
          },
          ]
      },
      {
        "queType":"Main",
        "type":"dropdown",
        "question":"Which company was established in 1976 by Steve Jobs ?",
        "options":["Apple","Microsoft","Atari"],
        "subQue":[
            {
                "queType":"Sub",
                "showIf":"Apple",
                "type":"dropdown",
                "question":"What is the most common way to iterate through an array ?",
                "options":["For loop","If Statements"]
            },
            {
                "queType":"Sub",
                "showIf":"Apple",
                "type":"textinput",
                "question":"Which type of code is represented in 0 and 1 ?",
                "options":[]
            },
            {
              "queType":"Sub",
              "showIf":"Atari",
              "type":"textinput",
              "question":"What is the through an array ?",
              "options":[]
          },
          {
            "queType":"Sub",
            "showIf":"Microsoft",
            "type":"textinput",
            "question":"through an array ?",
            "options":[]
        },
        ]
    },
    
  ]
    // this.quizService.getQuizData().subscribe((data: any[]) => {
    //   this.questions = data;
    // });
  }
}
