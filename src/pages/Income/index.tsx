import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { parseISO, format } from 'date-fns';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { gains, months } from 'repositories';

import { Container, Filters, ContentList } from './styles';

interface IGainData {
  identifier: string;
  frequency: string;
  description: string;
  date: string;
  amount: string;
}

const Income: React.FC = () => {
  const [gainsData, setGainsData] = useState<IGainData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const yearsOptions = useMemo(() => {
    const uniqueYears: number[] = [];

    gains.forEach(gain => {
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

  useEffect(() => {
    const parsedData = gains.map(gain => ({
      identifier: `income_${gains.indexOf(gain)}`,
      frequency: gain.frequency === 'recorrente' ? 'recurrent' : 'eventual',
      description: gain.description,
      date: format(parseISO(gain.date), 'dd/MM/yyyy'),
      amount: gain.amount,
    }));

    setGainsData(parsedData);
  }, []);

  useEffect(() => {
    let filteredDates = gains;

    if (selectedMonth && selectedYear) {
      filteredDates = gains.filter(gain => {
        const date = new Date(gain.date);

        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

        return month === selectedMonth && year === selectedYear;
      });
    }

    const parsedData = filteredDates.map(gain => ({
      identifier: `income_${gains.indexOf(gain)}`,
      frequency: gain.frequency === 'recorrente' ? 'recurrent' : 'eventual',
      description: gain.description,
      date: format(parseISO(gain.date), 'dd/MM/yyyy'),
      amount: gain.amount,
    }));

    setGainsData(parsedData);
  }, [selectedMonth, selectedYear]);

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
      <ContentHeader title="Income" lineColor="#f7931b">
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

      <Filters>
        <button type="button" className="recurrent">
          Recorrentes
        </button>
        <button type="button" className="eventual">
          Eventuais
        </button>
      </Filters>

      <ContentList>
        {gainsData.map(gain => (
          <FinanceMovementCard
            key={gain.identifier}
            tagClass={gain.frequency}
            title={gain.description}
            subTitle={gain.date}
            amount={gain.amount}
          />
        ))}
      </ContentList>
    </Container>
  );
};

export default Income;
