import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

import {
  Container,
  SideLeft,
  LegendsWrapper,
  Legend,
  SideRight,
} from './styles';

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <strong>Relation</strong>

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
          <PieChart>
            <Pie data={data} dataKey="percent">
              {data.map(indicator => (
                <Cell
                  key={`pie_${data.indexOf(indicator)}`}
                  fill={indicator.color}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ borderRadius: '8px' }}
              itemStyle={{ textTransform: 'capitalize' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default PieChartBox;
