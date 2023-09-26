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
  enterans:string=''
  subquestion:boolean=false
  Submit(Qoption:any) {
   // console.log('',Qoption.target.value)
   this.subquestioncheck=[];
   //console.log(this.question);
   if(this.question.hasOwnProperty('subQue')){
    this.question.subQue.filter((que:any)=>{
    if(que.showIf==Qoption.target.value){
      
      this.subquestioncheck.push(que);
      this.showSubQuestions=true
    }else if(!this.showSubQuestions){
      this.showSubQuestions=false
    }
  }  )}
  }

  // handleResponse(response: string) {
    
  //   this.question.userResponse = response;
  // }
}
