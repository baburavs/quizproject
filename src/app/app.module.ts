import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainQuizComponent } from './main-quiz/main-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz.service';


@NgModule({
  declarations: [
    AppComponent,
    MainQuizComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule, 
    FormsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
