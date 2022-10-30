import styles from './CardRanks.module.scss'

export default function CardRanks({ item }) {
    return(
        <div className={styles.card}>
            <img src={`https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/${item.tier}/largeicon.png`} />
            <strong>{item.divisionName}</strong>
        </div>
    )
}