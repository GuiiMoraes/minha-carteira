import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { parseISO, format } from 'date-fns';

import ContentHeader from 'components/ContentHeader';
import FinanceMovementCard from 'components/FinanceMovementCard';
import SelectInput from 'components/SelectInput';

import { expenses, months } from 'repositories';

import { Container, Filters, ContentList } from './styles';

interface IExpenseData {
  identifier: string;
  frequency: string;
  description: string;
  date: string;
  amount: string;
}

const Outcome: React.FC = () => {
  const [expensesData, setExpensesData] = useState<IExpenseData[]>([]);
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

    expenses.forEach(expense => {
      const date = new Date(expense.date);
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
    const parsedData = expenses.map(expense => ({
      identifier: `outcome_${expenses.indexOf(expense)}`,
      frequency:
        expense.frequency === 'recurrent'
          ? 'outcome-recurrent'
          : 'outcome-eventual',
      description: expense.description,
      date: format(parseISO(expense.date), 'dd/MM/yyyy'),
      amount: expense.amount,
    }));

    setExpensesData(parsedData);
  }, []);

  useEffect(() => {
    let filteredDatas = expenses;

    if (selectedMonth && selectedYear) {
      filteredDatas = expenses.filter(expense => {
        const date = new Date(expense.date);

        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

        return month === selectedMonth && year === selectedYear;
      });
    }

    filteredDatas = filteredDatas.filter(gain => {
      return selectedFrequencies.includes(gain.frequency);
    });

    const parsedData = filteredDatas.map(expense => ({
      identifier: `outcome_${expenses.indexOf(expense)}`,
      frequency:
        expense.frequency === 'recurrent'
          ? 'outcome-recurrent'
          : 'outcome-eventual',
      description: expense.description,
      date: format(parseISO(expense.date), 'dd/MM/yyyy'),
      amount: expense.amount,
    }));

    setExpensesData(parsedData);
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
      <ContentHeader title="Outcome" lineColor="#e44c4e">
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
          className={`outcome-recurrent ${
            selectedFrequencies.includes('recurrent') && 'frequencyActive'
          }`}
          onClick={() => handleFrequencyClick('recurrent')}
        >
          Recurrent
        </button>
        <button
          type="button"
          className={`outcome-eventual ${
            selectedFrequencies.includes('eventual') && 'frequencyActive'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventual
        </button>
      </Filters>

      <ContentList>
        {expensesData.map(expense => (
          <FinanceMovementCard
            key={expense.identifier}
            tagClass={expense.frequency}
            title={expense.description}
            subTitle={expense.date}
            amount={expense.amount}
          />
        ))}
      </ContentList>
    </Container>
  );
};

export default Outcome;
