import styles from '../styles/Home.module.css'
import QuestionComponent from "../components/QuestionComponents";
import QuestionModel from '../model/questionModel';
import AnswerModel from '../model/AnswerModel';

export default function Home() {


  const questionMock = new QuestionModel(1, 'Qual é o nome do segundo planeta do sistema solar?',[
    AnswerModel.rightAnswer('Venus'),
    AnswerModel.wrongAnswer('Terra'),
    AnswerModel.wrongAnswer('Marte'),
    AnswerModel.wrongAnswer('Mercúrio'),
    AnswerModel.wrongAnswer('Jupiter'),
  ])

  return (
    <div className={styles.homeContainer} >
      <QuestionComponent value={questionMock} />
    </div>
  )
}
