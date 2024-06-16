import Styled from "styled-components";

// Estilização do contêiner principal
export const Container = Styled.div`
  width: 100%; // Largura total do contêiner
  height: 260px; // Altura fixa do contêiner
  background-color: ${(props) => props.theme.colors.tertiary}; // Cor de fundo baseada no tema
  color: ${(props) => props.theme.colors.white}; // Cor do texto baseada no tema
  border-radius: 7px; // Bordas arredondadas
  display: flex; // Uso de flexbox para layout
  flex-direction: column; // Orientação dos itens em coluna
  justify-content: space-between; // Espaçamento igual entre os itens
  padding: 30px 20px; // Espaçamento interno do contêiner

  // Efeito de hover
  &:hover {
    opacity: 0.7s; // Transição de opacidade
    transform: scale(1.03); // Leve aumento de escala
`;

// Estilização da primeira linha de itens
export const FirstLine = Styled.div`
  display: flex; // Uso de flexbox para layout
  flex-wrap: wrap; // Itens podem quebrar linha se necessário
  justify-content: space-between; // Espaçamento igual entre os itens
`;

// Estilização da segunda linha de itens
export const SecondLine = Styled.div`
  width: 100%; // Largura total do contêiner
  display: flex; // Uso de flexbox para layout
  justify-content: center; // Itens centralizados
  margin-bottom: 20px; // Margem inferior para espaçamento
`;
