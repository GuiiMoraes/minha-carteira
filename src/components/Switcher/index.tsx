import React from 'react';

import { LabelContainer } from './styles';

interface ISwitch {
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
