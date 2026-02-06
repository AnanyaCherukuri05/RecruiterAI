import styles from './Impact.module.css';

const METRICS = [
  {
    label: '10x Faster Screening',
    detail: 'AI ranks 250+ apps/day vs 25 manually',
    value: '10x',
  },
  {
    label: '70% Faster Time-to-Hire',
    detail: '42 days → 12 days',
    value: '70%',
  },
  {
    label: '25x Interview Capacity',
    detail: '200+ automated interviews/day',
    value: '25x',
  },
  { label: '95% Application Completion', detail: 'Fewer drop-offs, more signal', value: '95%' },
  { label: '89% More Qualified Applications', detail: 'Better matching and targeting', value: '89%' },
  { label: '80% Lower Recruitment Costs', detail: 'Automation replaces manual overhead', value: '80%' },
  { label: '50% Reduction in Bad Hires', detail: 'Rubric-based scoring reduces bias', value: '50%' },
];

function MetricCard({ label, detail, value, index }) {
  const intensity = Math.min(0.18 + index * 0.02, 0.3);

  return (
    <div className={styles.card} style={{ '--glow': intensity }}>
      <div className={styles.top}>
        <div className={styles.value}>{value}</div>
        <div className={styles.badge}>Impact</div>
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.detail}>{detail}</div>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.fill} />
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className={styles.section} aria-labelledby="impact-title">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title} id="impact-title">
            The RecruiterAI <span className={styles.gradient}>Advantage</span>
          </h2>
          <p className={styles.subtitle}>Measured outcomes that improve speed, quality, and cost—across the entire workflow.</p>
        </header>

        <div className={styles.grid}>
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
