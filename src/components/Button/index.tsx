import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Input;
