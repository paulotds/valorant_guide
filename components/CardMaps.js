import styles from './CardMaps.module.scss'

export default function CardMaps({ item }) {
    return(
        <div className={styles.card}>
            <img src={`https://media.valorant-api.com/maps/${item.uuid}/splash.png`} />
            <strong>{item.displayName}</strong>
        </div>
    )
}