import AnswerModel from '../model/AnswerModel'
import styles from '../styles/QuestionStyle.module.css'

interface AnswerComponentProps {
    value: AnswerModel
    index: number
    textAnswer: string
    colorTextAnswer: string
    onResponse: (index: number) => void
}

export default function AnswerComponent(props: AnswerComponentProps) {

    const answer = props.value

    return (
        <div className={styles.answerContainer} onClick={() => props.onResponse(props.index)}>
            <div className={styles.answerContent}>
                {!answer.isAnswerShow ?
                    (
                        <div className={styles.answerContentFront}>
                            <div
                                className={styles.answerText}
                                style={{ backgroundColor: props.colorTextAnswer }}>
                                {props.textAnswer}
                            </div>
                            <div className={styles.answerValueFront}>
                                <div className={styles.answerTextValue}>{answer.valueAnswer}</div>
                            </div>
                        </div>

                    ) :
                    (
                        <div className={styles.answerContentBack}>
                            {answer.isAnswerRight ?
                                (<div className={styles.answerContentBackRight}>
                                    <div >A resposta esta correta...</div>
                                    <div className={styles.answerText}>{answer.valueAnswer}</div>
                                </div>)
                                :
                                (<div className={styles.answerContentBackWrong}>
                                    <div >A resposta esta errada... </div>
                                    <div className={styles.answerText} >{answer.valueAnswer}</div>
                                </div>)}
                        </div>
                    )
                }
            </div>
        </div >
    )

}