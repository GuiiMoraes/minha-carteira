import React from 'react';

import { Container } from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <Container>
      <header>
        <strong>{title}</strong>
        <img src={icon} alt={title} />

        <p>{description}</p>
      </header>
      <footer>{footerText}</footer>
    </Container>
  );
};

export default MessageBox;
