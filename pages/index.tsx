import styles from '../styles/Home.module.css'
import QuestionComponent from "../components/QuestionComponents";
import QuestionModel from '../model/questionModel';
import AnswerModel from '../model/AnswerModel';
import { useEffect, useRef, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import AllQuestionsComponent from '../components/AllQuestionsComponent';


const questionMock = new QuestionModel(1, 'Qual é o nome do segundo planeta do sistema solar?', [
  AnswerModel.rightAnswer('Venus'),
  AnswerModel.wrongAnswer('Terra'),
  AnswerModel.wrongAnswer('Marte'),
  AnswerModel.wrongAnswer('Mercúrio'),
  AnswerModel.wrongAnswer('Jupiter'),
])


export default function Home() {

  const [question, setQuestion] = useState(questionMock)
  const questionRef = useRef<QuestionModel>()

  function onResponse(index: number) {
    setQuestion(question.answerWith(index))
  }

  function onTimeOver() {
    if (!questionRef.current.isAnswered) {
      setQuestion(questionRef.current.answerWith(-1))
    }
  }

  function questionAnswered() {
    
  }

  function timeIsOver() {
    
  }

  useEffect(() => { questionRef.current = question }, [question])

  return (
    <div className={styles.homeContainer} >
      <AllQuestionsComponent
        lastQuestion={true}
        question={question}
        questionAnswered={questionAnswered}
        timeIsOver={timeIsOver} />
    </div>
  )
}
