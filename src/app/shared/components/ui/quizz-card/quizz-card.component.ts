import { Component, Input } from '@angular/core';
import { Quizzes } from '../../../../features/interfaces/quizzes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quizz-card',
  imports: [RouterLink],
  templateUrl: './quizz-card.component.html',
  styleUrl: './quizz-card.component.css'
})
export class QuizzCardComponent {

  @Input({required:true}) quizz!:Quizzes

}
