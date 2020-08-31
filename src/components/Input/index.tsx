import React, { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <InputContainer {...rest} />;
};

export default Input;
