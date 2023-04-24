import React, { FC, HTMLAttributes } from 'react';
import styles from './spinner.module.css';

export const Spinner: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div className={styles.spinner} {...props} />
);
