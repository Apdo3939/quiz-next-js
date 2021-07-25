import AnswerModel from '../model/AnswerModel'
import styles from '../styles/QuestionStyle.module.css'

interface AnswerComponentProps {
    value: AnswerModel
    index: number
    textAnswer: string
    colorTextAnswer: string
}

export default function AnswerComponent(props: AnswerComponentProps) {

    const answer = props.value

    return (
        <div className={styles.answerContainer}>
            <div className={styles.answerContent}>
                <div className={styles.answerContentFront}>
                    <div className={styles.answerTextFront}>
                        <div className={styles.answerText}>{props.textAnswer}</div>
                    </div>
                    <div className={styles.answerValueFront}>
                        <div className={styles.answerTextValue}>{answer.valueAnswer}</div>
                    </div>
                </div>

                {answer.isAnswerShow &&
                    <div className={styles.answerContentBack}>
                        <div className={styles.answerBack}>
                            <div className={styles.answerText}>{props.textAnswer}</div>
                        </div>
                        <div className={styles.answerBack}>
                            <div className={styles.answerTextValue}>{answer.valueAnswer}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}