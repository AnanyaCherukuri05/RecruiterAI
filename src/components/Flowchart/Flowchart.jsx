import useInView from '../../hooks/useInView.js';
import styles from './Flowchart.module.css';

function Arrow() {
  return (
    <div className={styles.arrow} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 14l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Connector() {
  return <span className={styles.connector} aria-hidden="true" />;
}

function ProcessNode({ text, variant = 'process', index, isVisible }) {
  const nodeClass = [styles.node, styles.process, styles[variant]].filter(Boolean).join(' ');
  const animClass = [styles.nodeAnim, isVisible ? styles.visible : styles.hidden].join(' ');

  const delayStyle = { transitionDelay: `${Math.min(index * 70, 420)}ms` };

  return (
    <div className={animClass} style={delayStyle}>
      <div className={nodeClass}>
        <span className={styles.nodeText}>{text}</span>
      </div>
    </div>
  );
}

function DecisionNode({ text, index, isVisible }) {
  const nodeClass = [styles.node, styles.decision].join(' ');
  const animClass = [styles.nodeAnim, isVisible ? styles.visible : styles.hidden].join(' ');
  const delayStyle = { transitionDelay: `${Math.min(index * 70, 420)}ms` };

  return (
    <div className={animClass} style={delayStyle}>
      <div className={nodeClass}>
        <span className={styles.nodeText}>{text}</span>
      </div>
    </div>
  );
}

function Branch({ decision, branches, continueFrom = 'right', index, isVisible }) {
  const left = branches?.left;
  const right = branches?.right;

  return (
    <div className={styles.branch}>
      <DecisionNode text={decision} index={index} isVisible={isVisible} />

      <div className={styles.branchArms} aria-hidden="true">
        <span className={styles.armLeft} />
        <span className={styles.armRight} />
      </div>

      <div className={styles.branchRow}>
        <div className={styles.branchCol}>
          {left ? <span className={[styles.sideTag, styles.left].join(' ')}>{left.tag}</span> : null}
          {left ? <ProcessNode text={left.text} variant="muted" index={index + 1} isVisible={isVisible} /> : null}
        </div>

        <div className={styles.branchCol}>
          {right ? <span className={[styles.sideTag, styles.right].join(' ')}>{right.tag}</span> : null}
          {right ? <ProcessNode text={right.text} variant="process" index={index + 2} isVisible={isVisible} /> : null}
        </div>
      </div>

      {continueFrom ? <Connector /> : null}
    </div>
  );
}

export default function Flowchart({ label, icon, title, benefit, nodes }) {
  const { ref, isInView } = useInView();

  return (
    <article ref={ref} className={styles.card} aria-label={title}>
      <header className={styles.header}>
        {label ? (
          <div className={styles.kicker}>
            {icon ? <span className={styles.kickerIcon}>{icon}</span> : null}
            <span className={styles.kickerText}>{label}</span>
          </div>
        ) : null}

        <h3 className={styles.title}>{title}</h3>
        <div className={styles.benefit}>
          <span className={styles.benefitIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M20 7L10 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.benefitText}>{benefit}</span>
        </div>
      </header>

      <div className={styles.canvas}>
        {nodes.map((n, i) => {
          if (n.type === 'branch') {
            return (
              <div key={`${n.type}-${n.decision}-${i}`} className={styles.step}>
                <Branch index={i} isVisible={isInView} decision={n.decision} branches={n.branches} continueFrom={n.continueFrom} />
                {i !== nodes.length - 1 ? <Arrow /> : null}
              </div>
            );
          }

          if (n.type === 'decision') {
            return (
              <div key={`${n.type}-${n.text}-${i}`} className={styles.step}>
                <DecisionNode index={i} isVisible={isInView} text={n.text} />
                {i !== nodes.length - 1 ? <Arrow /> : null}
              </div>
            );
          }

          return (
            <div key={`${n.type}-${n.text}-${i}`} className={styles.step}>
              <ProcessNode index={i} isVisible={isInView} text={n.text} variant={n.variant} />
              {i !== nodes.length - 1 ? <Arrow /> : null}
            </div>
          );
        })}
      </div>
    </article>
  );
}
