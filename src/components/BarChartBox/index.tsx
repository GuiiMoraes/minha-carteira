import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

import { formatCurrency } from 'utils';

import {
  Container,
  SideLeft,
  LegendsWrapper,
  Legend,
  SideRight,
} from './styles';

interface IBarChatBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChatBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <strong>{title}</strong>
        <LegendsWrapper>
          {data.map(indicator => (
            <Legend
              color={indicator.color}
              key={`legend_${data.indexOf(indicator)}`}
            >
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          ))}
        </LegendsWrapper>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={value => formatCurrency(Number(value))}
            />
            <Bar dataKey="amount" name="Value">
              {data.map(indicator => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
