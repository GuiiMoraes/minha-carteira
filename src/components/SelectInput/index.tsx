import React from 'react';

import { SelectContainer } from './styles';

interface ISelectInputProps {
  selectName?: string;
  selectedOption: string | null;
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  selectName = 'Choose an option',
  selectedOption,
  options,
  onChange,
}) => {
  return (
    <SelectContainer onChange={onChange} value={selectedOption || ''}>
      <option value="">{selectName}...</option>
      {options.map(option => (
        <option key={options.indexOf(option)} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectContainer>
  );
};
export default SelectInput;
