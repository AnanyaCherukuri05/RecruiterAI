import styles from './BackgroundEffects.module.css';

export default function BackgroundEffects() {
  return (
    <div className={styles.background}>
      {/* Animated gradient orbs */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className={styles.grid}></div>
    </div>
  );
}
