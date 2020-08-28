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
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

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
      frequency: expense.frequency === 'recorrente' ? 'recurrent' : 'eventual',
      description: expense.description,
      date: format(parseISO(expense.date), 'dd/MM/yyyy'),
      amount: expense.amount,
    }));

    setExpensesData(parsedData);
  }, []);

  useEffect(() => {
    let filteredDates = expenses;

    if (selectedMonth && selectedYear) {
      filteredDates = expenses.filter(expense => {
        const date = new Date(expense.date);

        const month = String(date.getMonth() + 1);
        const year = String(date.getFullYear());

        return month === selectedMonth && year === selectedYear;
      });
    }

    const parsedData = filteredDates.map(expense => ({
      identifier: `outcome_${expenses.indexOf(expense)}`,
      frequency: expense.frequency === 'recorrente' ? 'recurrent' : 'eventual',
      description: expense.description,
      date: format(parseISO(expense.date), 'dd/MM/yyyy'),
      amount: expense.amount,
    }));

    setExpensesData(parsedData);
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
      <ContentHeader title="Outcome" lineColor="#f7931b">
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
