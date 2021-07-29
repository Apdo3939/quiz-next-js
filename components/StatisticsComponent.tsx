import styles from '../styles/result.module.css'

interface StatisticsComponentProps {
    value: any
    text: string
    backgroundColor?: string
    fontColor?: string
}

export default function StatisticsComponent(props: StatisticsComponentProps) {
    return (
        <div className={styles.statisticsContainer}>
            <div
                className={styles.statisticsContentValue}
                style={
                    {
                        backgroundColor: props.backgroundColor ?? '#FDD60F',
                        color: props.fontColor ?? '#333343'
                    }}>
                {props.value}
            </div>
            <div className={styles.statisticsContentText}>{props.text}</div>
        </div>
    )
}