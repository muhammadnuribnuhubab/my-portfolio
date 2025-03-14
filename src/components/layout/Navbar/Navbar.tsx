import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.scss';
import CloseIcon from '@/assets/icon-close.svg';
import SMSIcon from '@/assets/Icon-message.svg';
import HamburgerMenu from '@/assets/icon-hamburger.svg';
import clsx from 'clsx';
import { Button } from '@/components/ui';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={clsx(styles.header, 'container')} ref={menuRef}>
      <div className={styles.navContainer}>
        <div className={clsx(styles.logo, { [styles.hidden]: menuOpen })}>
          <a href='#home'>Ibnu</a>
        </div>

        <nav className={styles.desktopMenu}>
          <ul className={clsx(styles.desktopNavLinks, { [styles.hidden]: menuOpen })}>
            {['home', 'about', 'skills', 'projects', 'faq'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={clsx(styles.navLinks, { [styles.active]: activeSection === section })}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav className={clsx(styles.mobileMenu, { [styles.open]: menuOpen })}>
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <a href='home'>Ibnu</a>
          </div>
          <div className={styles.closeIcon} onClick={toggleMenu} role='button' aria-label='Close Menu'>
            <CloseIcon />
          </div>
        </div>

        <ul className={styles.mobileNavLinks}>
          {['home', 'about', 'skills', 'projects', 'faq'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={clsx(styles.navLinks, { [styles.active]: activeSection === section })}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <Button as='a' href='#' className={styles.ctaButton} onClick={() => setMenuOpen(false)}>
          <div className={styles.buttonContent}>
            <SMSIcon />
            <span className={clsx(styles.buttonText, styles.buttonTextMobile)}>Hire Me</span>
          </div>
        </Button>
      </nav>

      <Button as='a' href='#' className={styles.ctaButton} onClick={() => setMenuOpen(false)}>
        <div className={styles.buttonContent}>
          <SMSIcon />
          <span className={clsx(styles.buttonText)}>Hire Me</span>
        </div>
      </Button>

      <div className={styles.hamburger} onClick={toggleMenu} role='button' aria-label='Open Menu'>
        <HamburgerMenu />
      </div>
    </header>
  );
};
