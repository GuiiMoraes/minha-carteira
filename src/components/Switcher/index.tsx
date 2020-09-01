import React, { InputHTMLAttributes } from 'react';

import { LabelContainer } from './styles';

interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {
  onChange(): void;
}

const Switcher: React.FC<ISwitch> = ({ ...props }) => {
  return (
    <LabelContainer>
      <input type="checkbox" {...props} />
      <span />
    </LabelContainer>
  );
};

export default Switcher;
