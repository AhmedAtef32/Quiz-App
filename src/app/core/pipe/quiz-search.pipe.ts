import { Pipe, PipeTransform } from '@angular/core';
import { Quizzes } from '../../features/interfaces/quizzes';

@Pipe({
  name: 'quizSearch'
})
export class QuizSearchPipe implements PipeTransform {

  transform(arr:Quizzes[] , searchValue:string): Quizzes[] {
    return arr.filter( (a) => a.titleSearch.toLowerCase().includes(searchValue.toLowerCase()) );
  }

}
