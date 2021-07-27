import styles from '../styles/TimerComponents.module.css'
import Link from 'next/link'

interface ButtonComponentProps {
    title: string
    href?: string
    onClick?: (e: any) => void
}

export default function ButtonComponent(props: ButtonComponentProps) {

    function renderButtonComponent() {
        return (
            <button
                className={styles.buttonContainer}
                onClick={props.onClick}>
                {props.title}
            </button>
        )
    }

    return props.href ?(
        <Link href={props.href}>
            {renderButtonComponent()}
        </Link>
    ): renderButtonComponent()
    
}