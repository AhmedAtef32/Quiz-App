import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-skeleton-quiz',
  imports: [],
  templateUrl: './skeleton-quiz.component.html',
  styleUrl: './skeleton-quiz.component.css'
})
export class SkeletonQuizComponent {
  skelton:WritableSignal<number[]>= signal([1,2,3,4])

}
