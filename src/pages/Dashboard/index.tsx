import React from 'react';

import ContentHeader from 'components/ContentHeader';
import SelectInput from 'components/SelectInput';

import { monthsOptions, yearsOptions } from 'utils';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <ContentHeader title="Dashboard" lineColor="#f7931b">
      <SelectInput options={monthsOptions} />
      <SelectInput options={yearsOptions} />
    </ContentHeader>
  );
};
export default Dashboard;
