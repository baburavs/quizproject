// quiz-question.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent {
  @Input() question: any;
  showSubQuestions: boolean = false; 
  Qoption:any
  subquestioncheck: any=[];
  Submit(Qoption:any) {
    console.log('',Qoption.target.value)
   this.subquestioncheck=[];
    this.question.subQue.filter((que:any)=>{
    if(que.showIf==Qoption.target.value){
      
      this.subquestioncheck.push(que);
      this.showSubQuestions=true
    }else{
      this.showSubQuestions=false
    }
  }
    )
  }

  handleResponse(response: string) {
    
    this.question.userResponse = response;
  }
}
