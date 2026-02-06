import styles from './Button.module.css';

export default function Button({
  as: Component = 'a',
  variant = 'primary',
  href,
  type,
  onClick,
  children,
  className,
  ...rest
}) {
  const classes = [styles.base, styles[variant], className].filter(Boolean).join(' ');

  return (
    <Component
      className={classes}
      href={Component === 'a' ? href : undefined}
      type={Component === 'button' ? type ?? 'button' : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
}
