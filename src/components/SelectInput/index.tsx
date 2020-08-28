import React from 'react';

import { SelectContainer } from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <SelectContainer>
      {options.map(option => (
        <option key={options.indexOf(option)} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectContainer>
  );
};
export default SelectInput;
