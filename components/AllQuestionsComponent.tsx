import QuestionModel from "../model/questionModel";
import styles from "../styles/QuestionStyle.module.css"
import ButtonComponent from "./ButtonComponent";
import QuestionComponent from "./QuestionComponents";

interface AllQuestionsComponentProps {
    question: QuestionModel
    lastQuestion: boolean
    questionAnswered: (question: QuestionModel) => void
    timeIsOver: () => void
}

export default function AllQuestionsComponent(props: AllQuestionsComponentProps) {

    function onResponse(index: number) {
        if(props.question.noAnswered){
            props.questionAnswered(props.question.answerWith(index))
        }
    }

    return (
        <div className={styles.allQuestions}>
            {
                props.question ?
                    <QuestionComponent
                        value={props.question}
                        onResponse={onResponse}
                        duration={10}
                        timeOver={props.timeIsOver} /> : false
            }

            <ButtonComponent
                title={props.lastQuestion ? 'Finalizar' : 'Próxima questão'}
                onClick={props.timeIsOver}
            />
        </div>
    )
}