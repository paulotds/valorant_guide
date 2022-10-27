import styles from './CardModes.module.scss';

export default function CardModes({ item }) {
    return(
        <div className={styles.card}>
            <img src={`https://media.valorant-api.com/gamemodes/${item.uuid}/displayicon.png`} />
            <strong>{item.displayName}</strong>
        </div>
    )
}