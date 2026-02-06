import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    name: 'Rahul Mehta',
    title: 'Hiring Manager',
    company: 'GrowthCo',
    quote:
      'We cut our screening time from days to hours. The shortlists are consistently high quality, and scheduling just happens.',
  },
  {
    name: 'Sarah Kapoor',
    title: 'Founder',
    company: 'TechStart',
    quote:
      'RecruiterAI gave us back our week. The workflows feel like we hired an ops team—without adding headcount.',
  },
  {
    name: 'Priya Sharma',
    title: 'CEO',
    company: 'InnovateLabs',
    quote:
      'We finally have a repeatable hiring process. Less chaos, faster decisions, and a much better candidate experience.',
  },
];

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function TestimonialCard({ name, title, company, quote, index }) {
  const hue = index % 3;

  return (
    <figure className={styles.card}>
      <div className={[styles.avatar, styles[`h${hue}`]].join(' ')} aria-hidden="true">
        <span className={styles.initials}>{initials(name)}</span>
      </div>

      <blockquote className={styles.quote}>“{quote}”</blockquote>
      <figcaption className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>
          {title} · {company}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title} id="testimonials-title">
            Trusted by <span className={styles.gradient}>500+</span> Companies
          </h2>
          <p className={styles.subtitle}>Teams use RecruiterAI to move faster without sacrificing quality.</p>
        </header>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
