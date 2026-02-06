import Button from '../Button/Button.jsx';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.inner}>
            <h2 className={styles.title} id="final-cta-title">
              Ready to Hire Better, <span className={styles.gradient}>Faster?</span>
            </h2>
            <p className={styles.subtitle}>Join 500+ companies hiring smarter with AI</p>

            <div className={styles.ctas} role="group" aria-label="Final calls to action">
              <Button href="#start" variant="primary">
                Start Free Trial
              </Button>
              <Button href="#schedule" variant="secondary">
                Schedule Demo
              </Button>
            </div>

            <span className="srOnly" id="schedule">
              Schedule section anchor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
