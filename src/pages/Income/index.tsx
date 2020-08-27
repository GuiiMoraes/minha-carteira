import React from 'react';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { monthsOptions, yearsOptions } from 'utils';

import { Container, ContentList } from './styles';

const Income: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Income" lineColor="#ccc">
        <SelectInput options={monthsOptions} />
        <SelectInput options={yearsOptions} />
      </ContentHeader>

      <ContentList>
        <FinanceMovementCard
          tagColor="#e44c4e"
          title="Titulo"
          subTitle="SubTitulo"
          amount="127"
        />
      </ContentList>
    </Container>
  );
};

export default Income;
