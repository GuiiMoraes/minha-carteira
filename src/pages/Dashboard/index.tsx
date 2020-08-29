import React, { useState, useMemo, useCallback } from 'react';
import { format } from 'date-fns';

import ContentHeader from 'components/ContentHeader';
import SelectInput from 'components/SelectInput';
import WalletBox from 'components/WalletBox';
import MessageBox from 'components/MessageBox';
import PieChartBox from 'components/PieChartBox';
import HistoryBox from 'components/HistoryBox';

import happyImg from 'assets/happy.svg';
import grinningImg from 'assets/grinning.svg';
import sadImg from 'assets/sad.svg';

import { expenses, gains, months } from 'repositories';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(() =>
    String(new Date().getMonth() + 1)
  );
  const [selectedYear, setSelectedYear] = useState<string>(() =>
    String(new Date().getFullYear())
  );

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

  const totalGains = useMemo(() => {
    let total = 0;
    gains.forEach(gain => {
      const date = new Date(gain.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(gain.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be a number.');
        }
      }
    });

    return {
      total,
      date: format(new Date(), 'dd/MM/yyyy hh:mm:ss'),
    };
  }, [selectedMonth, selectedYear]);

  const totalExpenses = useMemo(() => {
    let total = 0;
    expenses.forEach(expense => {
      const date = new Date(expense.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1);

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(expense.amount);
        } catch {
          throw new Error('Invalid amount! Amount must be a number.');
        }
      }
    });

    return {
      total,
      date: format(new Date(), 'dd/MM/yyyy hh:mm:ss'),
    };
  }, [selectedMonth, selectedYear]);

  const totalBalance = useMemo(() => {
    const total: number = totalGains.total - totalExpenses.total;

    return {
      total,
      date: format(new Date(), 'dd/MM/yyyy hh:mm:ss'),
    };
  }, [totalExpenses, totalGains]);

  const relationGainsVersusExpenses = useMemo(() => {
    const total: number = totalGains.total + totalExpenses.total;

    const gainsPercent = (totalGains.total / total) * 100 || 50;
    const expensesPercent = (totalExpenses.total / total) * 100 || 50;

    return [
      {
        name: 'income',
        value: totalGains.total,
        percent: Math.round(gainsPercent),
        color: '#f7931B',
      },
      {
        name: 'outcome',
        value: totalExpenses.total,
        percent: Math.round(expensesPercent),
        color: '#e44c4e',
      },
    ];
  }, [totalExpenses, totalGains]);

  const historyData = useMemo(() => {
    return months
      .map((_, month) => {
        let amountEntry = 0;
        gains.forEach(gain => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === month && gainYear === Number(selectedYear)) {
            try {
              amountEntry += Number(gain.amount);
            } catch {
              throw new Error('Invalid amountEntry. It must to be a number');
            }
          }
        });

        let amountOutput = 0;
        expenses.forEach(expense => {
          const date = new Date(expense.date);
          const expenseMonth = date.getMonth();
          const expenseYear = date.getFullYear();

          if (expenseMonth === month && expenseYear === Number(selectedYear)) {
            try {
              amountOutput += Number(expense.amount);
            } catch {
              throw new Error('Invalid amountOutput. It must to be a number');
            }
          }
        });

        return {
          monthNumber: month,
          month: months[month].substr(0, 3),
          amountEntry,
          amountOutput,
        };
      })
      .filter(item => {
        const currentMonth = new Date().getMonth();
        const currentYear = String(new Date().getFullYear());

        return (
          (selectedYear === currentYear && item.monthNumber <= currentMonth) ||
          selectedYear < currentYear
        );
      });
  }, [selectedYear]);

  const message = useMemo(() => {
    if (totalBalance.total < 0) {
      return {
        title: 'So sad!',
        description: 'This month, you expends more than your gains!',
        footerText:
          'Take a look at your expenses and try to remove what is unnecessary.',
        icon: sadImg,
      };
    }

    if (totalBalance.total > 0) {
      return {
        title: 'Very well!',
        description: 'Your wallet is healthy!',
        footerText: 'Keep in that way. Consider to invest this money',
        icon: happyImg,
      };
    }

    return {
      title: 'Almost!',
      description: 'This month, you expends all that your gains!',
      footerText: 'Take care! Next month, try to guard some money',
      icon: grinningImg,
    };
  }, [totalBalance.total]);

  const handleSelectMonth = useCallback(event => {
    setSelectedMonth(event.target.value);
  }, []);

  const handleSelectYear = useCallback(event => {
    setSelectedYear(event.target.value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedMonth(String(new Date().getMonth() + 1));
    setSelectedYear(String(new Date().getFullYear()));
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
          amount={totalBalance.total}
          footerLabel={`Updated at ${totalBalance.date}`}
          icon="dollar"
          color="#4e41f0"
        />
        <WalletBox
          title="Entradas"
          amount={totalGains.total}
          footerLabel={`Updated at ${totalGains.date}`}
          icon="arrowUp"
          color="#f7931B"
        />
        <WalletBox
          title="Saídas"
          amount={totalExpenses.total}
          footerLabel={`Updated at ${totalExpenses.date}`}
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartBox data={relationGainsVersusExpenses} />
        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#f7931B"
          lineColorAmountOutput="#e44c4e"
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
