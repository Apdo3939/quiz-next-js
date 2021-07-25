import styles from '../styles/QuestionStyle.module.css'
import QuestionModel from '../model/questionModel'
import EnunciateComponent from './enunciateComponent'
import AnswerComponent from './AnswerComponent'

interface QuestionComponentProps {
    value: QuestionModel
}

export default function QuestionComponent(props: QuestionComponentProps) {

    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return <AnswerComponent
                key={i}
                value={answer}
                index={i}
                textAnswer= "A"
                colorTextAnswer= "#F2C866" />
        })
    }

    return (
        <div className={styles.questionContainer}>
            <h1>Questão: {question.id}</h1>
            <EnunciateComponent textEnunciate={question.enunciate} />
            {renderAnswers()}
        </div>
    )
}