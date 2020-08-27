import React from 'react';

import ContentHeader from 'components/ContentHeader';
import SelectInput from 'components/SelectInput';

import { monthsOptions, yearsOptions } from 'utils';

// import { Container } from './styles';

const Outcome: React.FC = () => {
  return (
    <ContentHeader title="Outcome" lineColor="#ccc">
      <SelectInput options={monthsOptions} />
      <SelectInput options={yearsOptions} />
    </ContentHeader>
  );
};

export default Outcome;
