import Flowchart from '../Flowchart/Flowchart.jsx';
import styles from './HowItWorks.module.css';

function Icon({ name }) {
  switch (name) {
    case 'screening':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M21 21l-4.2-4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'interviews':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7.5A3.5 3.5 0 0 1 7.5 4h7A3.5 3.5 0 0 1 18 7.5v4A3.5 3.5 0 0 1 14.5 15h-7A3.5 3.5 0 0 1 4 11.5v-4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M18 9l3-2v10l-3-2V9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'pipeline':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 7a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6H6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M6 13v4a3 3 0 1 0 6 0v-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const FLOW_1 = {
  label: 'Screening + Scheduling',
  labelIcon: 'screening',
  title: 'Automated Candidate Screening & Interview Scheduling',
  benefit: 'Screen 250+ applications in minutes vs 8 hours manually',
  nodes: [
    { type: 'process', text: 'New Application\nSubmitted' },
    { type: 'process', text: 'AI Resume Screening\nRanks top 20%' },
    { type: 'process', text: 'Auto-send screening\nquestions via email' },
    {
      type: 'branch',
      decision: 'Qualification\nscore > 75%?',
      branches: {
        left: { tag: 'NO', text: 'Send thank-you email +\nKeep in talent pool' },
        right: { tag: 'YES', text: 'Auto-schedule interview\nvia calendar link' },
      },
      continueFrom: 'right',
    },
    { type: 'process', text: 'Interview scheduled →\nReminder 24 hours before' },
  ],
};

const FLOW_2 = {
  label: 'Multi-stage Interviews',
  labelIcon: 'interviews',
  title: 'Multi-Stage Interview Process Automation',
  benefit: 'Reduce time-to-hire from 42 days to 12 days',
  nodes: [
    { type: 'process', text: 'Candidate accepts\ninterview invite' },
    { type: 'process', text: 'Round 1:\nAI video interview' },
    { type: 'process', text: 'AI scores responses\nusing custom rubric' },
    {
      type: 'branch',
      decision: 'Score > 80%?',
      branches: {
        left: { tag: 'NO', text: 'Auto-rejection email\nwith constructive feedback' },
        right: { tag: 'YES', text: 'Auto-schedule Round 2\nwith hiring manager' },
      },
      continueFrom: 'right',
    },
    { type: 'process', text: 'Hiring manager interview\n+ decision' },
    {
      type: 'branch',
      decision: 'Hire or\nReject?',
      branches: {
        left: { tag: 'REJECT', text: 'Personalized rejection\n+ future opportunities note' },
        right: { tag: 'HIRE', text: 'Send offer letter\n+ welcome kit automatically' },
      },
      continueFrom: null,
    },
  ],
};

const FLOW_3 = {
  label: 'Talent Pipeline',
  labelIcon: 'pipeline',
  title: 'Passive Candidate Re-engagement System',
  benefit: 'Build a qualified talent pipeline automatically — never start from zero',
  nodes: [
    { type: 'process', text: 'Candidate rejected\n(60–74% score)' },
    { type: 'process', text: "Add to 'Future Talent'\ndatabase" },
    { type: 'process', text: 'Wait 3 months' },
    {
      type: 'branch',
      decision: 'New relevant\nrole opens?',
      branches: {
        left: { tag: 'NO', text: 'Check again\nnext quarter' },
        right: { tag: 'YES', text: 'AI sends personalized\nre-engagement email' },
      },
      continueFrom: 'right',
    },
    {
      type: 'branch',
      decision: 'Interested in\napplying?',
      branches: {
        left: { tag: 'NO RESPONSE', text: 'Continue in talent pool\nfor next quarter' },
        right: { tag: 'YES', text: 'Fast-track to interview\n(skip initial screening)' },
      },
      continueFrom: null,
    },
  ],
};

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-title" id="how-it-works">
      <div className="container">
        <header className={styles.header}>
          <h2 className={styles.title} id="how-title">
            AI Recruiting Software That Works <span className={styles.gradient}>Like Your Own HR Team</span>
          </h2>
          <p className={styles.subtitle}>Build custom hiring workflows in minutes. No coding required.</p>
        </header>

        <div className={styles.workflows}>
          <div className={styles.workflow}>
            <Flowchart {...FLOW_1} icon={<Icon name={FLOW_1.labelIcon} />} />
          </div>
          <div className={styles.workflow}>
            <Flowchart {...FLOW_2} icon={<Icon name={FLOW_2.labelIcon} />} />
          </div>
          <div className={styles.workflow}>
            <Flowchart {...FLOW_3} icon={<Icon name={FLOW_3.labelIcon} />} />
          </div>
        </div>
      </div>
    </section>
  );
}
