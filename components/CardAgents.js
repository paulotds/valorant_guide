import styles from './CardAgents.module.scss';

export default function CardAgents({ item }) {
    return (
      <div className={styles.card}>
        <h3>{item.displayName}</h3>
        <img className={styles.imgAgent} src={`https://media.valorant-api.com/agents/${item.uuid}/fullportrait.png`} />
        <img className={styles.overlay} src={`https://media.valorant-api.com/agents/${item.uuid}/background.png`} />
      </div>
    )
} 


