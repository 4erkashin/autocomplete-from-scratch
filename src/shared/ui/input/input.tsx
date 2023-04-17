import React, { useState, ChangeEvent } from 'react';

import { Spinner } from './spinner';
import styles from './input.module.css';

type InputProps = {
  label: string;
};

export const Input: React.FC<InputProps> = ({ label }) => {
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
    <label>
      {label}
      <div className={styles.input}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <Spinner isVisible={showSpinner} style={{ right: '4px' }} aria-label="Loading" />
      </div>
    </label>
  );
};
