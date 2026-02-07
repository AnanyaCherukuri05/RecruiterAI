import { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor" />
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.logoText}>RecruiterAI</span>
          </a>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#testimonials" className={styles.navLink}>Testimonials</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#faq" className={styles.navLink}>FAQ</a>
          </nav>

          <div className={styles.actions}>
            <a href="#login" className={styles.loginLink}>Log In</a>
            <Button variant="primary" href="#start">
              Get Started
            </Button>
          </div>

          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <a href="#how-it-works" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#testimonials" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <div className={styles.mobileDivider}></div>
            <a href="#login" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Log In</a>
            <Button variant="primary" href="#start">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
