import Button from '../Button/Button.jsx';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Hire Better, <span className="gradient-text">Faster?</span>
          </h2>
          <p className={styles.subtitle}>
            Join 500+ companies hiring smarter with AI
          </p>
          <div className={styles.ctas}>
            <Button variant="primary" href="#start">
              Start Free Trial
            </Button>
            <Button variant="secondary" href="#demo">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
