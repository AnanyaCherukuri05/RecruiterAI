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
  'Cutshort'
];

export default function HireAnywhere() {
  // Duplicate for seamless loop
  const allPlatforms = [...PLATFORMS, ...PLATFORMS];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Post Once, <span className="gradient-text">Reach Everywhere</span>
          </h2>
          <p className={styles.subtitle}>
            RecruiterAI syncs jobs across all major platforms
          </p>
        </div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {allPlatforms.map((platform, index) => (
              <div key={index} className={styles.platform}>
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
