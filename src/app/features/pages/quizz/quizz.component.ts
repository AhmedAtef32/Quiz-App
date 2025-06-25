import { isPlatformBrowser } from '@angular/common';
import { Component, computed, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, Signal, signal, ViewChildren, viewChildren, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizzService } from '../../../shared/services/Quizz/quizz.service';
import { IQuizzArray } from '../../../shared/interfaces/iquizz-array';
import { SkeletonQuizComponent } from "../../../shared/components/ui/skeleton-quiz/skeleton-quiz.component";

@Component({
  selector: 'app-quizz',
  imports: [SkeletonQuizComponent , RouterLink],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit , OnDestroy{

  private readonly _ActivatedRoute= inject(ActivatedRoute)
  private readonly _PLATFORM_ID= inject(PLATFORM_ID)
  private readonly _QuizzService= inject(QuizzService)
  id:string=""
  quizzQuestions!:IQuizzArray[]
  question!:IQuizzArray
  questionsAnswered!:string[]
  indexOfQuestion:WritableSignal<number>=signal(0)
  widthOfProgressBar:Signal<number> = computed(() => {
    return (this.indexOfQuestion() + 1) * 10
  })
  minutes:WritableSignal<number> = signal(9)
  seconds:WritableSignal<number> = signal(59)
  stopTimer:any
  @ViewChildren("answer") answers!:ElementRef[]
  answerSelected:WritableSignal<string> = signal("")
  correctAnswer:string[]=[];
  counter:WritableSignal<number> = signal(0);
  isCallingApi:WritableSignal<boolean> = signal(true);
  theExamIsOver:WritableSignal<boolean> = signal(false);

ngOnInit(): void {
  if(isPlatformBrowser(this._PLATFORM_ID)){
    this.getIdFromUrl()
    this.getQuizz()
    if(this.isCallingApi()){
      this.timer()
    }

  }
}

/**
 * Subscribes to route parameters to extract the 'id' parameter from the URL.
 * Updates the component's 'id' field with the extracted 'id'.
 */
getIdFromUrl(){
  this._ActivatedRoute.params.subscribe( (param)=>{
    this.id = param['id'];
  })
}

  /**
   * Retrieves the quizz data from the Open Trivia DB API.
   * The 'id' parameter is used to fetch the quizz with the corresponding category.
   * The quizz questions are stored in the component's 'quizzQuestions' field.
   * If the API call fails, the error is logged to the console.
   */
getQuizz(){
 this._QuizzService.gwtQuizz(this.id).subscribe({
  next:(res)=>{
    this.quizzQuestions= res.results
    this.updateQuestion()
    console.log(this.question)
    this.isCallingApi.set(false)
  },
  error:(err)=>{
    console.log(err)
  }
 })
}

selectAnswer(event:Event){
  const element = event.currentTarget as HTMLElement
  this.removeAnswerClass()
element.classList.add("bg-[black]!");
element.classList.add("text-[white]!");

this.answerSelected.set(element.innerText)



}


removeAnswerClass(){
  this.answers.forEach( (ele) => {
    ele.nativeElement.classList.remove("bg-[black]!")
    ele.nativeElement.classList.remove("text-[white]!")
  })
}




updateQuestion(){
    this.question = this.quizzQuestions[this.indexOfQuestion()]
    this.questionsAnswered = [...this.question.incorrect_answers , this.question.correct_answer].sort()
}

calculateScore(){
  this.correctAnswer.forEach( (a)=>{
    this.quizzQuestions.forEach( (b)=>{
      if (b.correct_answer === a) {
        this.counter.update(val => val + 1)
      }
    } )
  })
  console.log(this.counter())
}

btnNext(){
this.correctAnswer.push(this.answerSelected())
  if(this.indexOfQuestion() < 9){
     this.indexOfQuestion.update((value)=>value+1);
     this.updateQuestion()
  }else{
    this.calculateScore()
    this.theExamIsOver.set(true)
    clearInterval(this.stopTimer)
  }
  this.removeAnswerClass()
  console.log(this.correctAnswer)
  console.log(this.question)
}


/**
 * Initializes a countdown timer that decrements seconds every second.
 * If seconds reach 0, minutes are decremented, and seconds are reset to 59.
 * When both minutes and seconds reach 0, the timer is stopped.
 */
timer(){
 this.stopTimer = setInterval(()=>{
   this.seconds.update( val => val-1)
   if(this.minutes() === 0 && this.seconds() === 0){
     clearInterval(this.stopTimer)
    this.theExamIsOver.set(true)

    }else if (this.seconds() === 0){
      this.minutes.update( val => val-1)
      this.seconds.set(59)
    }
  },1000)
}

ngOnDestroy(): void {
  clearInterval(this.stopTimer)
}



}
