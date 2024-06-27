// src/components/ExchangeChartBox/index.tsx
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container } from "./styles";

interface IExchangeChartBoxProps {
  data: {
    date: string;
    rate: number;
  }[];
  lineColor: string;
  currency: string;
}

const ExchangeChartBox: React.FC<IExchangeChartBoxProps> = ({
  data = [],
  lineColor = "",
  currency = "",
}) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Container>
      <h2>Exchange Rates - {currency}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#cecece" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <Line
            type="monotone"
            dataKey="rate"
            name="Rate"
            stroke={lineColor}
            strokeWidth={3}
            dot={{ r: 3 }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default ExchangeChartBox;
