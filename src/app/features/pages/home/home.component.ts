import { Component } from '@angular/core';
import { Quizzes } from '../../interfaces/quizzes';
import { QuizzCardComponent } from "../../../shared/components/ui/quizz-card/quizz-card.component";
import { QuizSearchPipe } from '../../../core/pipe/quiz-search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [QuizzCardComponent ,QuizSearchPipe , FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    quizSearch:string = ""
    visible: boolean = false;


  quizzes:Quizzes[] = [
    {quizzId:23 , quizzTitle:"The ultimate History Quiz" ,quizzDesc:"test Your Knowledge Of World History." , quizzImg:"images/History.png",titleSearch:"History"},
    {quizzId:17 , quizzTitle:"The ultimate Science Quiz" ,quizzDesc:"test Your Knowledge Of Science." , quizzImg:"images/Science.png",titleSearch:"Science"},
    {quizzId:22 , quizzTitle:"The ultimate Geography Quiz" ,quizzDesc:"test Your Knowledge Of Geography." , quizzImg:"images/Geography.png",titleSearch:"Geography"},
    {quizzId:19 , quizzTitle:"The ultimate Math Quiz" ,quizzDesc:"test Your Knowledge Of Math." , quizzImg:"images/Math.png",titleSearch:"Math"},
    {quizzId:20 , quizzTitle:"The ultimate Mythology Quiz" ,quizzDesc:"test Your Knowledge Of Mythology." , quizzImg:"images/Literature.png",titleSearch:"Mythology"},
    {quizzId:25 , quizzTitle:"The ultimate Art Quiz" ,quizzDesc:"test Your Knowledge Of Art." , quizzImg:"images/Art.png",titleSearch:"Art"},
    {quizzId:21 , quizzTitle:"The ultimate Sport Quiz" ,quizzDesc:"test Your Knowledge Of Sport." , quizzImg:"images/Geography.png",titleSearch:"Sport"},
    {quizzId:15 , quizzTitle:"The ultimate Video Games Quiz" ,quizzDesc:"test Your Knowledge Of Video Games." , quizzImg:"images/Science.png",titleSearch:"Video Games"},
  ]

}
