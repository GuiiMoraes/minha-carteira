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
  const [selectedMonth, setSelectedMonth] = useState<string>(() =>
    String(new Date().getMonth() + 1)
  );
  const [selectedYear, setSelectedYear] = useState<string>(() =>
    String(new Date().getFullYear())
  );
  const [selectedFrequencies, setSelectedFrequencies] = useState([
    'recurrent',
    'eventual',
  ]);

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
      frequency:
        gain.frequency === 'recurrent' ? 'income-recurrent' : 'income-eventual',
      description: gain.description,
      date: format(parseISO(gain.date), 'dd/MM/yyyy'),
      amount: gain.amount,
    }));

    setGainsData(parsedData);
  }, []);

  useEffect(() => {
    let filteredDatas = gains;

    if (selectedMonth && selectedYear) {
      filteredDatas = gains.filter(gain => {
        const date = new Date(gain.date);

        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

        return month === selectedMonth && year === selectedYear;
      });
    }

    filteredDatas = filteredDatas.filter(gain => {
      return selectedFrequencies.includes(gain.frequency);
    });

    const parsedData = filteredDatas.map(gain => ({
      identifier: `income_${gains.indexOf(gain)}`,
      frequency: `income-${gain.frequency}`,
      description: gain.description,
      date: format(parseISO(gain.date), 'dd/MM/yyyy'),
      amount: gain.amount,
    }));

    setGainsData(parsedData);
  }, [selectedMonth, selectedYear, selectedFrequencies]);

  const handleSelectMonth = useCallback(event => {
    setSelectedMonth(event.target.value);
  }, []);

  const handleSelectYear = useCallback(event => {
    setSelectedYear(event.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedMonth(String(new Date().getMonth() + 1));
    setSelectedYear(String(new Date().getFullYear()));
    setSelectedFrequencies(['recurrent', 'eventual']);
  }, []);

  const handleFrequencyClick = useCallback(
    (frequency: string): void => {
      const alreadySelected = selectedFrequencies.findIndex(
        selectedFrequency => selectedFrequency === frequency
      );

      if (alreadySelected >= 0) {
        setSelectedFrequencies(prevState =>
          prevState.filter(item => item !== frequency)
        );
      } else {
        setSelectedFrequencies(prevState => [...prevState, frequency]);
      }
    },
    [selectedFrequencies]
  );

  return (
    <Container>
      <ContentHeader title="Income" lineColor="#03bb85">
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
        <button
          type="button"
          className={`income-recurrent ${
            selectedFrequencies.includes('recurrent') && 'frequencyActive'
          }`}
          onClick={() => handleFrequencyClick('recurrent')}
        >
          Recurrent
        </button>
        <button
          type="button"
          className={`income-eventual ${
            selectedFrequencies.includes('eventual') && 'frequencyActive'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventual
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
