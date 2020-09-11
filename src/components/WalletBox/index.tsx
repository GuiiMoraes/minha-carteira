import React from 'react';

import CountUp from 'react-countup';
import dollarImg from 'assets/dollar.svg';
import arrowUpImg from 'assets/arrow-up.svg';
import arrowDownImg from 'assets/arrow-down.svg';

import { Container } from './styles';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const icons = {
    dollar: dollarImg,
    arrowUp: arrowUpImg,
    arrowDown: arrowDownImg,
  };

  return (
    <Container color={color}>
      <span>{title}</span>
      <strong>
        <span className="prefix">R$ </span>
        <CountUp
          end={amount}
          separator="."
          decimal=","
          decimals={2}
          preserveValue
        />
      </strong>
      <small>{footerLabel}</small>
      <img src={icons[icon]} alt={title} />
    </Container>
  );
};

export default WalletBox;
