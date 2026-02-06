import styles from './FAQ.module.css';

const FAQS = [
  {
    q: 'How does AI screening work?',
    a: 'RecruiterAI parses resumes, scores candidates against role-specific criteria, and produces a ranked shortlist with explainable signals (skills, experience, keywords, and rubric matches).',
  },
  {
    q: 'Does RecruiterAI integrate with ATS?',
    a: 'Yes. RecruiterAI can sync candidates and statuses with common ATS tools. If you have a specific ATS, we can map the workflow fields and stages during setup.',
  },
  {
    q: "What’s the pricing structure?",
    a: 'Pricing is typically based on roles, monthly volume, and automation modules (screening, scheduling, assessments). You can start free and upgrade when you’re ready.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are live in 1–2 days. For custom rubrics, integrations, and multi-stage pipelines, setup can take 3–7 days depending on complexity.',
  },
  {
    q: 'Is candidate data secure?',
    a: 'RecruiterAI follows secure-by-default practices: encrypted transport, access controls, and data minimization. You can also configure retention policies and audit trails.',
  },
];

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title} id="faq-title">
            Frequently Asked <span className={styles.gradient}>Questions</span>
          </h2>
          <p className={styles.subtitle}>Everything you need to know before you start.</p>
        </header>

        <div className={styles.list}>
          {FAQS.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.question}>{item.q}</span>
                <Chevron />
              </summary>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
