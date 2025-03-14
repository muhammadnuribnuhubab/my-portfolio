import React from 'react';
import styles from './Home.module.scss';
import { Navbar } from '@/components/layout';

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.home} id="home">Home</section>
      <section className={styles.about} id="about">About</section>
      <section className={styles.skills} id="skills">Skills</section>
      <section className={styles.projects} id="projects">Projects</section>
      <section className={styles.faq} id="faq">FAQ</section>
    </div>
  );
};
