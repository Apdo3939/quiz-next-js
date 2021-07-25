import styles from '../styles/QuestionStyle.module.css'

interface EnunciateComponentProps {
    textEnunciate: string
}


export default function EnunciateComponent(props: EnunciateComponentProps) {

    return (
        <div className={styles.enunciateContainer}>
            <span className={styles.enunciateText}>{props.textEnunciate}</span>
        </div>
    )

}