import Link from 'next/link'
import styles from '../styles/result.module.css'


export default function result() {
    return (
        <div className={styles.resultContainer}>
            Resultado
            <Link href='/' passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}