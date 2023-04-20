import React, { useState, useId, ChangeEvent } from 'react';

import { Spinner } from './spinner';
import styles from './input.module.css';

type InputProps = {
  label: string;
};

export const Input: React.FC<InputProps> = ({ label }) => {
  const labeledById = useId();

  const [inputValue, setInputValue] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  };

  return (
    <label className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        aria-labelledby={labeledById}
        placeholder={label}
        value={inputValue}
        onChange={handleInputChange}
      />

      <span className={styles.floatingLabel} id={labeledById}>
        {label}
      </span>

      <Spinner
        isVisible={showSpinner}
        style={{ right: '8px' }}
        aria-label="Loading"
      />
    </label>
  );
};
