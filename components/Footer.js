import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <h2>© Copyright Valorant Ultimate Guide </h2>
                <p>Valorant Media Wiki é um site 
                    não oficial e não endossada pela Riot Games de forma 
                    alguma. Riot Games, Valorant e todas as propriedades associadas 
                    são marcas comerciais ou marcas registradas da Riot Games, Inc.</p>
            </div>
            <div className={styles.divisor}></div>
            <div className={styles.navFooter}>
                <li>Início</li>
                <li>Agentes</li>
                <li>Mapas</li>
                <li>Modos de jogo</li>
                <li>Ranques</li>
            </div>
            <div className={styles.divisor}></div>
            <div className={styles.social}>
                <p>Design e desenvolvimento por<br></br> 
                <span>Paulo Tavares</span></p>
                <div className={styles.redesSociais}>
                    <Link className={styles.icon} href="">
                        <img src="/img/linkedin-icon.svg" />
                    </Link>
                    <Link className={styles.icon} href="">
                        <img src="/img/github-icon.svg" />
                    </Link>
                    <Link className={styles.icon} href="">
                        <img src="/img/twitter-icon.svg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}