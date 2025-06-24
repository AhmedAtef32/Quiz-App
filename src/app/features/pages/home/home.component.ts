import { Component } from '@angular/core';
import { Quizzes } from '../../interfaces/quizzes';
import { QuizzCardComponent } from "../../../shared/components/ui/quizz-card/quizz-card.component";
import { QuizSearchPipe } from '../../../core/pipe/quiz-search.pipe';

@Component({
  selector: 'app-home',
  imports: [QuizzCardComponent ,QuizSearchPipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    quizSearch:string = ""

  quizzes:Quizzes[] = [
    {quizzId:21 , quizzTitle:"The ultimate History Quiz" ,quizzDesc:"test Your Knowledge Of World History." , quizzImg:"images/History.png",titleSearch:"History"},
    {quizzId:21 , quizzTitle:"The ultimate Science Quiz" ,quizzDesc:"test Your Knowledge Of Science." , quizzImg:"images/Science.png",titleSearch:"Science"},
    {quizzId:21 , quizzTitle:"The ultimate Geography Quiz" ,quizzDesc:"test Your Knowledge Of Geography." , quizzImg:"images/Geography.png",titleSearch:"Geography"},
    {quizzId:21 , quizzTitle:"The ultimate Math Quiz" ,quizzDesc:"test Your Knowledge Of Math." , quizzImg:"images/Math.png",titleSearch:"Math"},
    {quizzId:21 , quizzTitle:"The ultimate Literature Quiz" ,quizzDesc:"test Your Knowledge Of Literature." , quizzImg:"images/Literature.png",titleSearch:"Literature"},
    {quizzId:21 , quizzTitle:"The ultimate Art Quiz" ,quizzDesc:"test Your Knowledge Of Art." , quizzImg:"images/Art.png",titleSearch:"Art"},

  ]

}
