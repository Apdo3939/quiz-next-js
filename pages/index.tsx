import styles from '../styles/Home.module.css'
import QuestionModel from '../model/questionModel';
import AnswerModel from '../model/AnswerModel';
import { useEffect, useState } from 'react';
import AllQuestionsComponent from '../components/AllQuestionsComponent';


const questionMock = new QuestionModel(1, 'Qual é o nome do segundo planeta do sistema solar?', [
  AnswerModel.rightAnswer('Venus'),
  AnswerModel.wrongAnswer('Terra'),
  AnswerModel.wrongAnswer('Marte'),
  AnswerModel.wrongAnswer('Mercúrio'),
  AnswerModel.wrongAnswer('Jupiter'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const [question, setQuestion] = useState(questionMock)
  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [questionsRight, setQuestionsRight] = useState<number>(0)
  

  async function loadQuestionsId() {
    const res = await fetch(`${BASE_URL}/questionsId`)
    const questionsId = await res.json()
    setQuestionsId(questionsId)
  }

  async function loadQuestion(id: number) {
    const res = await fetch(`${BASE_URL}/questions/${id}`)
    const json = await res.json()
    const newQuestion = QuestionModel.createObj(json)
    setQuestion(newQuestion)
  }

  function questionAnswered(answered: QuestionModel) {
    setQuestion(answered)
    const right = answered.isRight
    setQuestionsRight(questionsRight + (right ? 1 : 0))
  }

  function timeIsOver() {
    console.log("terminou o tempo")
  }


  useEffect(() => { loadQuestionsId() }, [])

  useEffect(() => {
    questionsId.length > 0 && loadQuestion(questionsId[0])
  }, [questionsId])


  return (
    <div className={styles.homeContainer} >
      <AllQuestionsComponent
        question={question}
        lastQuestion={false}
        questionAnswered={questionAnswered}
        timeIsOver={timeIsOver} />
    </div>
  )
}
