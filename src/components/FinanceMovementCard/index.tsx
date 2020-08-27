import React from 'react';

import { formatNumber } from 'utils';

import { Container } from './styles';

interface IFinanceMovementCardProps {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const FinanceMovementCard: React.FC<IFinanceMovementCardProps> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return (
    <Container tagColor={tagColor}>
      <span />
      <div>
        <p>{title}</p>
        <small>{subTitle}</small>
      </div>

      <strong>{formatNumber(Number(amount))}</strong>
    </Container>
  );
};

export default FinanceMovementCard;
