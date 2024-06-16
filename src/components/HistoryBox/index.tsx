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

// Definição da interface para as props do componente HistoryBox
interface IHistoryBoxProps {
  data: {
    month: string; // Nome do mês
    amountEntry: number; // Valor das entradas
    amountOutput: number; // Valor das saídas
  }[];
  lineColorAmountEntry: string; // Cor da linha para as entradas
  lineColorAmountOutput: string; // Cor da linha para as saídas
}

// Componente funcional HistoryBox
const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data, // Dados a serem exibidos no gráfico
  lineColorAmountEntry, // Cor da linha de entradas
  lineColorAmountOutput, // Cor da linha de saídas
}) => {
  // Função para formatar o valor do tooltip
  const formatTooltipValue = (value: number) => {
    return value.toFixed(2); // Formata o valor com duas casas decimais
  };

  // Renderização do componente
  return (
    <Container>
      <h2>Histórico de Saldo</h2>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>
          {/* Eixo X exibindo os meses */}
          <XAxis dataKey="month" stroke="#cecece" />
          {/* Tooltip para exibir os valores ao passar o mouse */}
          <Tooltip
            formatter={(value: number) => formatCurrency(Number(value))}
          />
          {/* Grade do gráfico */}
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          {/* Linha para os valores de entrada */}
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={3}
            dot={{ r: 3 }}
          />
          {/* Linha para os valores de saída */}
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
