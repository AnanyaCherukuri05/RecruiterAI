import styles from './Hero.module.css';

export default function ConversationBubble({ position, name, quote }) {
  return (
    <div className={`${styles.bubble} ${styles[position]}`}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>— {name}</p>
    </div>
  );
}
