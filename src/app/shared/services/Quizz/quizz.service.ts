import { IQuizzArray, responseGetQuizz } from './../../interfaces/iquizz-array';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private _http : HttpClient) { }

  gwtQuizz(id:string):Observable<responseGetQuizz>{
    return this._http.get<responseGetQuizz>(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=multiple`);
  }
}
