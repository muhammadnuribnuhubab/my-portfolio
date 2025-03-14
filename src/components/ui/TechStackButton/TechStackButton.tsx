import React from 'react';
import styles from './TechStackButton.module.scss';

interface TechStackButtonProps {
  techStack: string[];
}

export const TechStackButton: React.FC<TechStackButtonProps> = ({
  techStack,
}: TechStackButtonProps) => {
  return (
    <>
      {techStack.map((tech) => (
        <span key={tech} className={styles.techStackItem}>
          {tech}
        </span>
      ))}
    </>
  );
};
