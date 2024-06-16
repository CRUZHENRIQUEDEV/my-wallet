import React from "react";
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles"; // Importa os estilos do componente

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts"; // Importa componentes da biblioteca Recharts

// Define a interface para as propriedades que o componente receberá
interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

// Define o componente funcional BarChartBox
const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => (
  <Container>
    {/* Lado esquerdo do componente */}
    <SideLeft>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {/* Mapeia os dados e cria uma célula para cada indicador */}
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Bar>
          <Tooltip
            cursor={{ fill: "none" }}
            formatter={
              (value: number) =>
                `R$ ${value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}` // Formata o valor do tooltip com o prefixo "R$" e duas casas decimais
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </SideLeft>
    {/* Lado direito do componente */}
    <SideRight>
      <ul>
        {/* Mapeia os dados e cria um item de lista para cada indicador */}
        {data.map((indicator) => (
          <li key={indicator.name}>
            <span style={{ backgroundColor: indicator.color }}>
              {indicator.percent}%
            </span>
            <strong>{indicator.name}</strong>
          </li>
        ))}
      </ul>
    </SideRight>
  </Container>
);

export default BarChartBox; // Exporta o componente para uso em outros lugares
