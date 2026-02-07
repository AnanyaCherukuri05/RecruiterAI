import useScrollAnimation from '../../hooks/useScrollAnimation.js';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything.",
    name: "Rahul Mehta",
    title: "Founder",
    company: "TechStart Solutions"
  },
  {
    quote: "The AI screening is incredibly accurate. We're seeing 3x more qualified candidates in our pipeline.",
    name: "Sarah Johnson",
    title: "Head of HR",
    company: "GrowthCo"
  },
  {
    quote: "Finally, a recruiting tool that actually saves time instead of adding more work. Game changer.",
    name: "Priya Sharma",
    title: "CEO",
    company: "InnovateLabs"
  }
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Trusted by <span className="gradient-text">500+</span> Companies
          </h2>
          <p className={styles.subtitle}>
            See what hiring teams are saying about RecruiterAI
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.avatar}>
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.title}>{testimonial.title} · {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
