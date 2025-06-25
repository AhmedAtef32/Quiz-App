

export interface responseGetQuizz {
  response_code: number
  results: IQuizzArray[]
}

export interface IQuizzArray {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
