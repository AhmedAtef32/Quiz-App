import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '' , redirectTo:"home" , pathMatch:"full" },
  {path:'home' , loadComponent: ()=> import("./features/pages/home/home.component").then(c => c.HomeComponent) ,title:"Home"},
  {path:'quizz/:id' , loadComponent: ()=> import("./features/pages/quizz/quizz.component").then(c => c.QuizzComponent) ,title:"Quizz"},
];
