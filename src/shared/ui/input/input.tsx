import React, { useState, useId, ChangeEvent } from 'react';

import styles from './input.module.css';

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  onChange?: Function;
  label: string;
};

export const Input: React.FC<InputProps> = ({ label, onChange, ...rest }) => {
  const labeledById = useId();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
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
        {...rest}
      />

      <span className={styles.floatingLabel} id={labeledById}>
        {label}
      </span>
    </label>
  );
};
