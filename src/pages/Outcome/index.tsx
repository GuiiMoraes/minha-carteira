import React from 'react';
import { parseISO, format } from 'date-fns';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { expenses, monthsOptions, yearsOptions } from 'repositories';

import { Container, Filters, ContentList } from './styles';

const Outcome: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Outcome" lineColor="#e44c4e">
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
        {expenses.map(outcome => (
          <FinanceMovementCard
            key={`outcome_${expenses.indexOf(outcome)}`}
            tagColor={
              outcome.frequency === 'recorrente' ? 'recurrent' : 'eventual'
            }
            title={outcome.description}
            subTitle={format(parseISO(outcome.date), 'dd/MM/yyyy')}
            amount={outcome.amount}
          />
        ))}
      </ContentList>
    </Container>
  );
};

export default Outcome;
