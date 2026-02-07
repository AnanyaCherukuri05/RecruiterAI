import Flowchart from '../Flowchart/Flowchart.jsx';
import useScrollAnimation from '../../hooks/useScrollAnimation.js';
import styles from './HowItWorks.module.css';

const FLOWCHART_1 = {
  title: 'Automated Candidate Screening & Interview Scheduling',
  benefit: 'Screen 250+ applications in minutes vs 8 hours manually',
  steps: [
    { type: 'process', text: 'New Application submitted' },
    { type: 'process', text: 'AI Resume Screening → Ranks top 20%' },
    { type: 'process', text: 'Auto-send screening questions via email' },
    { 
      type: 'decision', 
      text: 'Qualification score > 75%?',
      yes: 'Auto-schedule interview via calendar link',
      no: 'Thank-you email + Talent pool'
    },
    { type: 'process', text: 'Interview scheduled → Reminder 24 hours before' }
  ]
};

const FLOWCHART_2 = {
  title: 'Multi-Stage Interview Process Automation',
  benefit: 'Reduce time-to-hire from 42 days to 12 days',
  steps: [
    { type: 'process', text: 'Candidate accepts interview' },
    { type: 'process', text: 'Round 1: AI video interview' },
    { type: 'process', text: 'AI scores responses using custom rubric' },
    { 
      type: 'decision', 
      text: 'Score > 80%?',
      yes: 'Schedule Round 2 with hiring manager',
      no: 'Auto-rejection with feedback'
    },
    { 
      type: 'decision', 
      text: 'Hire or Reject?',
      yes: 'Send offer letter + welcome kit',
      no: 'Personalized rejection + future note'
    }
  ]
};

const FLOWCHART_3 = {
  title: 'Passive Candidate Re-engagement System',
  benefit: 'Build a qualified talent pipeline automatically',
  steps: [
    { type: 'process', text: 'Rejected candidate with 60-74% score' },
    { type: 'process', text: 'Added to future talent pool' },
    { type: 'process', text: 'Wait 3 months' },
    { 
      type: 'decision', 
      text: 'New role opens?',
      yes: 'AI sends personalized re-engagement email',
      no: 'Check again next quarter'
    },
    { 
      type: 'decision', 
      text: 'Interested?',
      yes: 'Fast-track to interview',
      no: 'Stay in pool'
    }
  ]
};

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>
            AI Recruiting Software That Works <span className="gradient-text">Like Your Own HR Team</span>
          </h2>
          <p className={styles.subtitle}>
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </div>

        <div className={styles.flowcharts}>
          <div className={`${styles.flowchartWrapper} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0.1s' }}>
            <Flowchart {...FLOWCHART_1} />
          </div>
          <div className={`${styles.flowchartWrapper} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0.2s' }}>
            <Flowchart {...FLOWCHART_2} />
          </div>
          <div className={`${styles.flowchartWrapper} ${isVisible ? styles.visible : ''}`} style={{ animationDelay: '0.3s' }}>
            <Flowchart {...FLOWCHART_3} />
          </div>
        </div>
      </div>
    </section>
  );
}
