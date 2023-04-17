import React from 'react';
import styles from './spinner.module.css';

type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  isVisible: boolean;
};
export const Spinner: React.FC<SpinnerProps> = ({ isVisible, ...rest }) => (
  <>{isVisible && <div className={styles.spinner} {...rest} />}</>
);
