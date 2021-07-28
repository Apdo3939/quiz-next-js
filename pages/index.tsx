import styles from '../styles/Home.module.css'
import QuestionModel from '../model/questionModel';
import { useEffect, useState } from 'react';
import AllQuestionsComponent from '../components/AllQuestionsComponent';
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()
  const [question, setQuestion] = useState<QuestionModel>()
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

  function nextQuestionId() {
    const nextId = questionsId.indexOf(question.id) + 1
    return questionsId[nextId]
  }

  function timeIsOver() {
    const nextId = nextQuestionId()
    nextId ? nextQuestionPage(nextId) : finished()
  }

  function nextQuestionPage(nextId: number) {
    loadQuestion(questionsId[nextId])
  }

  function finished() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsId.length,
        right: questionsRight
      }
    })
  }

  useEffect(() => { loadQuestionsId() }, [])

  useEffect(() => {
    questionsId.length > 0 && loadQuestion(questionsId[0])
  }, [questionsId])


  return question ? (
    <AllQuestionsComponent
      question={question}
      lastQuestion={nextQuestionId() === undefined}
      questionAnswered={questionAnswered}
      timeIsOver={timeIsOver} />
  ) : false
}
