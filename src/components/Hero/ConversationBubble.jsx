import styles from './Hero.module.css';

export default function ConversationBubble({ quote, byline, position }) {
  const className = [styles.bubble, position ? styles[position] : null].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <p className={styles.quote}>
        <em>{quote}</em>
      </p>
      <span className={styles.byline}>{byline}</span>
    </div>
  );
}
