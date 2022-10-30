import styles from './Button.module.scss';
import Link from 'next/link'


export default function Button({ children, href, props }) {
    return (
        <>
            <Link href={href} >
              <a className={`${styles.buttonUi}`}>{children}</a>
            </Link>
        </>
    )
}