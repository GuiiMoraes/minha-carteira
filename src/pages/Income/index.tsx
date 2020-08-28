import React from 'react';
import { parseISO, format } from 'date-fns';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { gains, monthsOptions, yearsOptions } from 'repositories';

import { Container, Filters, ContentList } from './styles';

const Income: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Income" lineColor="#f7931b">
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
        {gains.map(income => (
          <FinanceMovementCard
            key={`income_${gains.indexOf(income)}`}
            tagColor={
              income.frequency === 'recorrente' ? 'recurrent' : 'eventual'
            }
            title={income.description}
            subTitle={format(parseISO(income.date), 'dd/MM/yyyy')}
            amount={income.amount}
          />
        ))}
      </ContentList>
    </Container>
  );
};

export default Income;
