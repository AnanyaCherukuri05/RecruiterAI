import styles from './Flowchart.module.css';

export default function Flowchart({ title, benefit, steps }) {
  return (
    <div className={styles.flowchart}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.benefit}>
        <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        {benefit}
      </div>

      <div className={styles.flow}>
        {steps.map((step, index) => (
          <div key={index}>
            {step.type === 'process' && (
              <div className={styles.processNode}>
                {step.text}
              </div>
            )}

            {step.type === 'decision' && (
              <div className={styles.decisionWrapper}>
                <div className={styles.decisionNode}>
                  <div className={styles.decisionText}>{step.text}</div>
                </div>
                <div className={styles.branches}>
                  <div className={styles.branch}>
                    <span className={styles.branchLabel}>YES</span>
                    <div className={styles.branchNode}>{step.yes}</div>
                  </div>
                  <div className={styles.branch}>
                    <span className={styles.branchLabel}>NO</span>
                    <div className={styles.branchNode}>{step.no}</div>
                  </div>
                </div>
              </div>
            )}

            {index < steps.length - 1 && step.type !== 'decision' && (
              <div className={styles.arrow}>↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
