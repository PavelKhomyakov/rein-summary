import React from 'react';
import styles from '../styles/tooltip.module.css';

const Tooltip = ({ text, children }) => {
  return (
    <span className={styles.tooltipWrapper}>
      <span className={styles.tooltipText}>{children}</span>
      <div className={styles.tooltip}>{text}</div>
    </span>
  );
};

export default Tooltip;
