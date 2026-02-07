import styles from './Button.module.css';

export default function Button({ variant = 'primary', href, children, ...props }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
