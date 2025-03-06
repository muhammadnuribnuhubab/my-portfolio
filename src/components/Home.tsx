import React from 'react';
import styles from './Home.module.scss';
import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <Hero />
    </div>
  );
};
