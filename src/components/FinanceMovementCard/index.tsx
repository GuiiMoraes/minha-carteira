import React from 'react';

import { formatCurrency } from 'utils';

import { Container } from './styles';

interface IFinanceMovementCardProps {
  tagClass: string;
  title: string;
  subTitle: string;
  amount: string;
}

const FinanceMovementCard: React.FC<IFinanceMovementCardProps> = ({
  tagClass,
  title,
  subTitle,
  amount,
}) => {
  return (
    <Container>
      <span className={tagClass} />
      <div>
        <p>{title}</p>
        <small>{subTitle}</small>
      </div>

      <strong>{formatCurrency(Number(amount))}</strong>
    </Container>
  );
};

export default FinanceMovementCard;
