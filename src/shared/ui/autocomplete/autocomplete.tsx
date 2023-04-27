import React, { useState, useEffect } from 'react';

import { useDebounce } from '~/shared/hooks';
import { Input } from '../input/input';
import { Spinner } from '../spinner/spinner';

import styles from './autocomplete.module.css';

type AutocompleteProps = {
  label?: string;
};

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label = 'Autocomplete component',
}) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleInputChange = () => {
    setShowSpinner(true);
  };

  const debouncedHandleInputChange = useDebounce(handleInputChange, 500);

  useEffect(() => {
    if (!showSpinner) {
      return;
    }

    const timerId = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [showSpinner]);

  return (
    <div className={styles.autocomplete}>
      <Input label={label} onChange={debouncedHandleInputChange} />
      {showSpinner && <Spinner style={{ right: '8px' }} aria-label="Loading" />}
    </div>
  );
};
