import Button from '../Button/Button.jsx';
import ConversationBubble from './ConversationBubble.jsx';
import styles from './Hero.module.css';

const CONVERSATIONS = [
  {
    position: 'top-left',
    name: 'Sarah K., Founder at TechStart',
    quote: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."
  },
  {
    position: 'top-right',
    name: 'Rahul M., Hiring Manager at GrowthCo',
    quote: 'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.'
  },
  {
    position: 'bottom-left',
    name: 'Priya S., CEO at InnovateLabs',
    quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."
  },
  {
    position: 'bottom-right',
    name: 'Amit T., Head of HR at ScaleUp',
    quote: 'Our best candidate accepted another offer while we were still scheduling interviews.'
  }
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bubbles}>
        {CONVERSATIONS.map((conv, index) => (
          <ConversationBubble
            key={index}
            position={conv.position}
            name={conv.name}
            quote={conv.quote}
          />
        ))}
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Every Hire, Faster and Better
          </h1>
          
          <p className={styles.subheadline}>
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
          </p>

          <div className={styles.ctas}>
            <Button variant="primary" href="#start">
              Start Hiring Smarter
            </Button>
            <Button variant="secondary" href="#how-it-works">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
