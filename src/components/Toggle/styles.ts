import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes de estilo
import Switch, { ReactSwitchProps } from "react-switch"; // Importa o componente Switch e suas propriedades do react-switch

// Define o container principal que envolve o toggle e os rótulos
export const Container = styled.div`
  display: flex; // Define um layout flexível
  align-items: center; // Alinha os itens ao centro na direção vertical
`;

// Define o estilo para os rótulos (labels) do toggle
export const ToggleLabel = styled.span`
  margin: 0 5px; // Adiciona margem de 5px em ambos os lados
`;

// Define o estilo para o seletor (switch) do toggle, com atributos adicionais
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.gray, // Define a cor do fundo quando o toggle está ligado
    offColor: theme.colors.gray, // Define a cor do fundo quando o toggle está desligado
    onHandleColor: theme.colors.secondary, // Define a cor do botão quando o toggle está ligado
    offHandleColor: theme.colors.secondary, // Define a cor do botão quando o toggle está desligado
  })
)`
  margin: 0 10px; // Adiciona margem de 10px em ambos os lados
`;
