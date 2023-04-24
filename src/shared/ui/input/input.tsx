import React, { useState, useId, ChangeEvent } from 'react';

import styles from './input.module.css';

type InputProps = {
  label: string;
};

export const Input: React.FC<InputProps> = ({ label }) => {
  const labeledById = useId();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
    </label>
  );
};
