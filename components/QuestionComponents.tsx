import styles from '../styles/QuestionStyle.module.css'
import QuestionModel from '../model/questionModel'
import EnunciateComponent from './EnunciateComponent'
import AnswerComponent from './AnswerComponent'
import TimerComponents from './TimerComponents'

const textLetter = [
    { valueLetter: 'A', cor: '#F2C866' },
    { valueLetter: 'B', cor: '#F266BA' },
    { valueLetter: 'C', cor: '#85C866' },
    { valueLetter: 'D', cor: '#85D4F2' },
    { valueLetter: 'E', cor: '#BCE596' },
]

interface QuestionComponentProps {
    value: QuestionModel
    duration?: number
    onResponse: (index: number) => void
    timeOver: () => void
}

export default function QuestionComponent(props: QuestionComponentProps) {

    const question = props.value

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return <AnswerComponent
                key={i}
                value={answer}
                index={i}
                textAnswer={textLetter[i].valueLetter}
                colorTextAnswer={textLetter[i].cor}
                onResponse={props.onResponse} />
        })
    }

    return (
        <div className={styles.questionContainer}>
            <h1>Questão: {question.id}</h1>
            <EnunciateComponent textEnunciate={question.enunciate} />
            <TimerComponents duration={props.duration ?? 10} timeOver={props.timeOver} />
            {renderAnswers()}
        </div>
    )
}