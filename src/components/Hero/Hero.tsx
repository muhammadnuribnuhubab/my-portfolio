import React, { useState, useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import { FadeWrapper } from '../FadeWrapper';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setIsMobile(width < 569);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section className={styles.hero} ref={containerRef}>
        <FadeWrapper
          type='end'
          direction='vertical'
          className={styles.wavesWrapper}
        >
          <div className={styles.wavesBackground} />
        </FadeWrapper>

        <div className={styles.overflowWrapper}>
          <div className={styles.container}>
            {/* {label Ibnu Portfolio} */}
            <div className={styles.label}>😝 Ibnu's Portfolio</div>

            {/* title */}
            <h1 className={styles.title}>
              I am a{' '}
              <span className={styles.highlight}>
                {isMobile ? (
                  <>
                    <span className={styles.box}>
                      <p className={styles.boxText}>Front-</p>
                      <span className={styles.cornerTopRight}></span>
                      <span className={styles.cornerBottomLeft}></span>
                    </span>
                    <span className={styles.box}>
                      <p className={styles.boxText}>End Developer</p>
                      <span className={styles.cornerTopRight}></span>
                      <span className={styles.cornerBottomLeft}></span>
                    </span>
                  </>
                ) : (
                  <span className={styles.box}>
                    <p className={styles.boxText}>Front-End Developer</p>
                    <span className={styles.cornerTopRight}></span>
                    <span className={styles.cornerBottomLeft}></span>
                  </span>
                )}
              </span>{' '}
              & Web Programming Instructor
            </h1>

            {/* description */}
            <p className={styles.description}>
              Hi, I’m Alex, a passionate web developer with over{' '}
              <span className={styles.experience}>3 years of experience</span>{' '}
              in creating responsive websites. I also teach aspiring developers
              to master modern web programming and bring their ideas to life.
            </p>

            <Button as='a' href='#' className={styles.ctaButton}>
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
