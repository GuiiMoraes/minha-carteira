import React from 'react';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { monthsOptions, yearsOptions } from 'utils';

import { Container, Filters, ContentList } from './styles';

const Outcome: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Outcome" lineColor="#ccc">
        <SelectInput options={monthsOptions} />
        <SelectInput options={yearsOptions} />
      </ContentHeader>

      <Filters>
        <button type="button" className="recurrent">
          Recorrentes
        </button>
        <button type="button" className="eventual">
          Eventuais
        </button>
      </Filters>

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

export default Outcome;
