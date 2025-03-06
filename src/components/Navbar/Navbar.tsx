import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import NavIcon from '@/assets/nav_icon.svg';
import CloseIcon from '@/assets/icon-close.svg';
import SMSIcon from '@/assets/Icon-message.svg';
import HamburgerMenu from '@/assets/icon-hamburger.svg';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={clsx(styles.header, 'container')}>
      {/* Logo */}
      <div className={styles.logo}>
        <NavIcon />
      </div>

      {/* Navbar untuk mobile */}
      <nav
        className={clsx(styles.mobileMenu, {
          [styles.open]: menuOpen,
        })}
      >
        {/* Menu navbar mobile */}
        <div className={styles.mobileHeader}>
          <div className={styles.logo}>
            <NavIcon />
          </div>
          <div className={styles.closeIcon} onClick={toggleMenu} role='button' aria-label='Close Menu'>
            <CloseIcon />
          </div>
        </div>

        <ul className={styles.mobileNavLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <Button as='a' href='#' className={styles.ctaButton}>
          <div className={styles.buttonContent}>
            <SMSIcon />
            <span className={clsx(styles.buttonText, styles.buttonTextMobile)}>
              Hire Me
            </span>
          </div>
        </Button>
      </nav>

      {/* Navbar untuk desktop */}
      <nav className={styles.desktopMenu}>
        <ul className={styles.desktopNavLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </nav>

      <Button as='a' href='#' className={styles.ctaButton}>
        <div className={styles.buttonContent}>
          <SMSIcon />
          <span className={clsx(styles.buttonText)}>Hire Me</span>
        </div>
      </Button>

      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        role='button'
        aria-label='Open Menu'
      >
        <HamburgerMenu />
      </div>
    </header>
  );
};
