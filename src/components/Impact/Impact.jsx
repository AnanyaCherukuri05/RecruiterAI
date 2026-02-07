import useScrollAnimation from '../../hooks/useScrollAnimation.js';
import styles from './Impact.module.css';

const METRICS = [
  {
    value: '10x',
    label: 'Faster Screening',
    detail: 'AI ranks 250+ apps/day vs 25 manually'
  },
  {
    value: '70%',
    label: 'Faster Time-to-Hire',
    detail: '42 days → 12 days'
  },
  {
    value: '25x',
    label: 'Interview Capacity',
    detail: '200+ automated interviews/day'
  },
  {
    value: '95%',
    label: 'Application Completion',
    detail: 'Higher completion rates'
  },
  {
    value: '89%',
    label: 'More Qualified Applications',
    detail: 'Better candidate matching'
  },
  {
    value: '80%',
    label: 'Lower Recruitment Costs',
    detail: 'Reduced manual overhead'
  },
  {
    value: '50%',
    label: 'Reduction in Bad Hires',
    detail: 'Data-driven decisions'
  }
];

export default function Impact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            The RecruiterAI <span className="gradient-text">Advantage</span>
          </h2>
          <p className={styles.subtitle}>
            Measured outcomes that improve speed, quality, and cost across the entire workflow.
          </p>
        </div>

        <div className={styles.grid}>
          {METRICS.map((metric, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.value}>{metric.value}</div>
              <div className={styles.label}>{metric.label}</div>
              <div className={styles.detail}>{metric.detail}</div>
              <div className={styles.bar}>
                <div className={`${styles.barFill} ${isVisible ? styles.barFillAnimated : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
