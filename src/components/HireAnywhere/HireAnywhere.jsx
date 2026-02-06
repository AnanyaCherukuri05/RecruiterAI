import styles from './HireAnywhere.module.css';

const PLATFORMS = [
  'LinkedIn',
  'Naukri',
  'Indeed',
  'AngelList',
  'Instahyre',
  'IIMJobs',
  'Glassdoor',
  'Monster',
  'Cutshort',
];

function PlatformMark() {
  return (
    <svg className={styles.mark} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PlatformPill({ name }) {
  return (
    <div className={styles.pill} title={name} aria-label={name}>
      <PlatformMark />
      <span className={styles.pillText}>{name}</span>
    </div>
  );
}

export default function HireAnywhere() {
  // Duplicate items to create a seamless marquee.
  const marqueeItems = [...PLATFORMS, ...PLATFORMS];

  return (
    <section className={styles.section} aria-labelledby="hire-anywhere-title">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title} id="hire-anywhere-title">
            Post Once, <span className={styles.gradient}>Reach Everywhere</span>
          </h2>
          <p className={styles.subtitle}>RecruiterAI syncs jobs across platforms</p>
        </header>

        <div className={styles.strip} role="region" aria-label="Job platforms">
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          <div className={styles.track} aria-hidden="true">
            {marqueeItems.map((name, idx) => (
              <PlatformPill key={`${name}-${idx}`} name={name} />
            ))}
          </div>
        </div>

        <p className={styles.note}>
          Logos are represented with neutral wordmarks in this build; swap in official SVG assets later if needed.
        </p>
      </div>
    </section>
  );
}
