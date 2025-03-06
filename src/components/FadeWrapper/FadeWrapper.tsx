import React, { ReactNode } from 'react';
import styles from './FadeWrapper.module.scss';
import clsx from 'clsx';
import { colorToRGBA } from '@/utils/colorToRGBA';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface FadeWrapperProps {
  children: ReactNode;
  type: 'start' | 'end' | 'both' | 'none';
  direction?: 'endhorizontal' | 'vertical';
  fadeWith?: number;
  className?: string;
  fadeColor?: string;
}

const fadeVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  type,
  className,
  direction = 'horizontal',
  fadeWith = 100,
  fadeColor = '#000',
}) => {
  const fadeWithRem = `${fadeWith / 16}rem`;
  const transparentColor = colorToRGBA(fadeColor);
  const isStartVisible = type === 'start' || type === 'both';
  const isEndVisible = type === 'end' || 'both';
  const fadeStyle = {
    ...(direction === 'horizontal'
      ? { width: fadeWithRem }
      : { height: fadeWithRem }),
    '--fade-color': fadeColor,
    '--transparent-color': transparentColor,
  };

  return (
    <div>
      <div className={clsx(styles.wrapper, className)}>
        <AnimatePresence initial={false}>
          {direction === 'horizontal' && (
            <>
              <motion.div
                className={clsx(styles.fade, styles.startHorizontal)}
                initial='hidden'
                animate={isStartVisible ? 'visible' : 'hidden'}
                exit={'hidden'}
                variants={fadeVariants}
                style={fadeStyle}
              />
              <motion.div
                className={clsx(styles.fade, styles.endHorizontal)}
                initial='hidden'
                animate={isEndVisible ? 'visible' : 'hidden'}
                exit={'hidden'}
                variants={fadeVariants}
                style={fadeStyle}
              />
            </>
          )}
          {direction === 'vertical' && (
            <>
              <motion.div
                className={clsx(styles.fade, styles.startVertical)}
                initial='hidden'
                animate={isStartVisible ? 'visible' : 'hidden'}
                exit={'hidden'}
                variants={fadeVariants}
                style={fadeStyle}
              />
              <motion.div
                className={clsx(styles.fade, styles.endVertical)}
                initial='hidden'
                animate={isEndVisible ? 'visible' : 'hidden'}
                exit={'hidden'}
                variants={fadeVariants}
                style={fadeStyle}
              />
            </>
          )}
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
};
