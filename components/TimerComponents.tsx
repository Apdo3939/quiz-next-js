import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/TimerComponents.module.css'

interface TimerComponentsProps {
    duration: number
    timeOver: () => void
}

export default function TimerComponents(props: TimerComponentsProps) {
    return (
        <div className={styles.timerComponentContainer}>
            <CountdownCircleTimer
                size={60}
                duration={props.duration}
                isPlaying
                onComplete={props.timeOver}
                colors={[
                    ['#BCE598', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33],
                ]}
            >
                {({remainingTime}) => remainingTime }
            </CountdownCircleTimer>
        </div>
    )
}