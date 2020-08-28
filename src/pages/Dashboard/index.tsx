import React from 'react';

import ContentHeader from 'components/ContentHeader';
import SelectInput from 'components/SelectInput';

import { monthsOptions, yearsOptions } from 'repositories';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <ContentHeader title="Dashboard" lineColor="#1a8db9">
      <SelectInput options={monthsOptions} />
      <SelectInput options={yearsOptions} />
    </ContentHeader>
  );
};
export default Dashboard;
