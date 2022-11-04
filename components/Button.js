import styles from './Button.module.scss';
import Link from 'next/link'


export default function Button({ children, href, variant = false }) {
    console.log(variant)
    return (
        <>
            <Link href={href} >
              <a className={variant ? styles[variant] : styles.buttonUi }>{children}</a>
            </Link>
        </>
    )
}