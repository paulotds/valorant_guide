import styles from './CardAgents.module.scss';

export default function CardAgents({ item }) {
    return (
      <div className={styles.card_item}>
        <img src={`https://media.valorant-api.com/agents/${item.uuid}/fullportrait.png`} width="150" />
        {item.displayName}
      </div>
    )
} 


