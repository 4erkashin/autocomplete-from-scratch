import React, { useState, useMemo, useId, ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { Spinner } from './spinner';
import styles from './input.module.css';

type InputProps = {
  label: string;
};

export const Input: React.FC<InputProps> = ({ label }) => {
  const labeledById = useId();

  const [inputValue, setInputValue] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const shouldFloatLabel = useMemo(
    () => inputValue !== '' || isFocused,
    [inputValue, isFocused]
  );

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

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
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <span
        className={clsx(styles.floatingLabel, {
          [styles.floatedUp]: shouldFloatLabel,
        })}
        id={labeledById}
      >
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
