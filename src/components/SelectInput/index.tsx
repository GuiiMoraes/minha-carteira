import React from 'react';

import { SelectContainer } from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <SelectContainer>
      {options.map(option => (
        <option key={options.indexOf(option)} value={option.value}>
          {option.value}
        </option>
      ))}
    </SelectContainer>
  );
};
export default SelectInput;
