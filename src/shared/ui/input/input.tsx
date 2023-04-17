import React, { useState, ChangeEvent } from 'react';

export type InputProps = {
  label: string;
};

export const Input = ({ label }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <label>
      {label}
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </label>
  );
};
