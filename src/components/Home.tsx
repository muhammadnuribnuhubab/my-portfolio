import React from 'react';
import { Navbar } from './Navbar';
import styles from './Home.module.scss';
import { Hero } from './Hero';

export const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Hero />
    </div>
  );
};
