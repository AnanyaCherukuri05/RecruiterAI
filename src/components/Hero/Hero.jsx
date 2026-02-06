import Button from '../Button/Button.jsx';
import ConversationBubble from './ConversationBubble.jsx';
import styles from './Hero.module.css';

const CONVERSATIONS = [
  {
    position: 'tl',
    byline: 'Sarah K., Founder at TechStart',
    quote:
      "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
  },
  {
    position: 'tr',
    byline: 'Rahul M., Hiring Manager at GrowthCo',
    quote:
      'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.',
  },
  {
    position: 'bl',
    byline: 'Priya S., CEO at InnovateLabs',
    quote:
      "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
  },
  {
    position: 'br',
    byline: 'Amit T., Head of HR at ScaleUp',
    quote: 'Our best candidate accepted another offer while we were still scheduling interviews.',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bubbles} aria-hidden="true">
        {CONVERSATIONS.map((c) => (
          <ConversationBubble
            key={c.position}
            position={c.position}
            quote={`“${c.quote}”`}
            byline={c.byline}
          />
        ))}
      </div>

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            <span>AI recruiting automation for modern teams</span>
          </div>

          <h1 className={styles.title} id="hero-title">
            Every Hire,<br />
            <span className={styles.gradient}>Faster and Better</span>
          </h1>

          <p className={styles.subtitle}>
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you
            focus on building your team.
          </p>

          <div className={styles.ctas} role="group" aria-label="Primary calls to action">
            <Button href="#start" variant="primary">
              <span>Start Hiring Smarter</span>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            <Button href="#how-it-works" variant="secondary">
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10 8l6 4-6 4V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>See How It Works</span>
            </Button>
          </div>

          <span className="srOnly" id="start">
            Start section anchor
          </span>
          <span className="srOnly" id="how-it-works">
            How it works section anchor
          </span>
        </div>
      </div>
    </section>
  );
}
