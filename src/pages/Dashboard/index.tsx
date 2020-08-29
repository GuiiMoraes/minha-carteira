import React, { useState, useMemo, useCallback } from 'react';

import ContentHeader from 'components/ContentHeader';
import SelectInput from 'components/SelectInput';
import WalletBox from 'components/WalletBox';
import MessageBox from 'components/MessageBox';

import happyImg from 'assets/happy.svg';
import sadImg from 'assets/sad.svg';

import { expenses, gains, months } from 'repositories';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const yearsOptions = useMemo(() => {
    const uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(gain => {
      const date = new Date(gain.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => ({
      value: year,
      label: year,
    }));
  }, []);

  const monthsOptions = useMemo(() => {
    return months.map((month, index) => ({
      value: index + 1,
      label: month,
    }));
  }, []);

  const handleSelectMonth = useCallback(event => {
    setSelectedMonth(event.target.value);
  }, []);

  const handleSelectYear = useCallback(event => {
    setSelectedYear(event.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedMonth(null);
    setSelectedYear(null);
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#1a8db9">
        <SelectInput
          selectName="Months"
          options={monthsOptions}
          selectedOption={selectedMonth}
          onChange={handleSelectMonth}
        />
        <SelectInput
          selectName="Years"
          options={yearsOptions}
          selectedOption={selectedYear}
          onChange={handleSelectYear}
        />
        <button
          type="button"
          className="clear-filters"
          onClick={handleClearFilters}
        >
          Clear filters
        </button>
      </ContentHeader>

      <Content>
        <WalletBox
          title="Saldo"
          amount={150}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4e41f0"
        />
        <WalletBox
          title="Entradas"
          amount={5000}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931B"
        />
        <WalletBox
          title="Saídas"
          amount={4850}
          footerLabel="Atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title="Very well!"
          description="Your wallet is health!"
          footerText="Keep in that way. Consider to invest this money"
          icon={happyImg}
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
