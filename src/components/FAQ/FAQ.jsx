import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation.js';
import styles from './FAQ.module.css';

const FAQS = [
  {
    question: 'How does AI screening work?',
    answer: 'RecruiterAI uses advanced natural language processing to analyze resumes, match candidates against job requirements, and rank them based on skills, experience, and cultural fit. The AI learns from your hiring decisions to improve over time.'
  },
  {
    question: 'Does RecruiterAI integrate with ATS?',
    answer: 'Yes! RecruiterAI integrates seamlessly with major ATS platforms including Greenhouse, Lever, Workday, and BambooHR. We also offer a REST API for custom integrations.'
  },
  {
    question: "What's the pricing structure?",
    answer: 'We offer flexible pricing based on your hiring volume. Plans start at $299/month for up to 50 applications, with enterprise plans available for high-volume hiring. All plans include a 14-day free trial.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Most teams are up and running in under 2 hours. Our onboarding team will help you configure workflows, integrate with your existing tools, and train the AI on your specific requirements.'
  },
  {
    question: 'Is candidate data secure?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit and at rest, and we never share candidate information with third parties. You maintain full control over your data.'
  }
];

function FAQItem({ question, answer, index, isVisible }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`${styles.item} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button 
        className={styles.question}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg 
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about RecruiterAI
          </p>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
