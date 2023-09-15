import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuizComponent } from './main-quiz/main-quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }, // Default route
  { path: 'quiz', component: MainQuizComponent },
  { path: 'quiz/:id', component: QuizQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
