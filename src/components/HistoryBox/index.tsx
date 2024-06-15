import React from "react";
import { Container } from "./styles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import formatCurrency from "../../utils/formatCurrency";
interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => {
  const formatTooltipValue = (value: number) => {
    return value.toFixed(2);
  };

  return (
    <Container>
      <h2>Histórico de Saldo</h2>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip
            formatter={(value: number) => formatCurrency(Number(value))}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={3}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default HistoryBox;
