import { useRouter } from 'next/router'
import StatisticsComponent from '../components/StatisticsComponent'
import ButtonComponent from '../components/ButtonComponent'
import styles from '../styles/result.module.css'


export default function result() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const total = +router.query.total
    const right = +router.query.right
    const percent = Math.round(right / total * 100)

    return (
        <div className={styles.resultContainer}>
            <h1 className={styles.resultTitle}>Resultado</h1>
            <div className={styles.resultContent}>
                <StatisticsComponent
                    text="Perguntas corretas" value={right} backgroundColor='#368d45'
                    fontColor='#FFF' />
                <StatisticsComponent
                    text="Total de perguntas" value={total}
                    backgroundColor='#574087'
                    fontColor='#FFF' />
                <StatisticsComponent
                    text="Porcentagem de acertos" value={`${percent}%`}
                    backgroundColor='#883a54'
                    fontColor='#FFF' />
            </div>
            <ButtonComponent
                title='Tentar novamente'
                href='/' />
        </div>
    )
}