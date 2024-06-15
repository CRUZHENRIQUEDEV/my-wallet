import React from "react";
import { Container, SideLeft, SideRight } from "./styles";

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => (
  <Container>
    <SideLeft>
      <h2>{title}</h2>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Bar>
          <Tooltip
            cursor={{ fill: "none" }}
            formatter={(value: number) => value.toLocaleString("pt-BR")}
          />
        </BarChart>
      </ResponsiveContainer>
    </SideLeft>
    <SideRight>
      <ul>
        {data.map((indicator) => (
          <li key={indicator.name}>
            <span>{indicator.percent}%</span>
            <strong>{indicator.name}</strong>
          </li>
        ))}
      </ul>
    </SideRight>
  </Container>
);

export default BarChartBox;
