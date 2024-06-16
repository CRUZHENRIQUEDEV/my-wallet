import styled from "styled-components";

// Contêiner principal que envolve todo o conteúdo do Dashboard
export const Container = styled.div`
  padding: 20px;
  background-color: ${(props) =>
    props.theme.colors.primary}; // Define a cor de fundo com base no tema
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto com base no tema
`;

// Linha que contém os elementos da primeira linha do Dashboard (WalletBox, etc.)
export const FirstLine = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os elementos sejam quebrados em várias linhas, se necessário
  justify-content: space-between; // Espaça os elementos igualmente
`;

// Contêiner para os botões de filtro
export const Filters = styled.div`
  width: 100%; // Define a largura para ocupar todo o espaço disponível
  display: flex;
  justify-content: center; // Centraliza os botões de filtro horizontalmente
  margin-bottom: 20px; // Adiciona uma margem inferior
`;

// Botões de filtro individuais
export const FilterButton = styled.button`
  background: none; // Remove o fundo padrão do botão
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto com base no tema
  font-size: 18px; // Define o tamanho da fonte
  margin: 0 10px; // Adiciona uma margem horizontal
  opacity: 0.4; // Define a opacidade padrão
  transition: opacity 0.3s; // Define uma transição suave para a mudança de opacidade

  &:hover {
    opacity: 0.7; // Aumenta a opacidade ao passar o mouse
  }

  &.tag-actived {
    opacity: 1; // Define a opacidade total quando o botão está ativo
    border-bottom: 2px solid ${(props) => props.theme.colors.warning}; // Adiciona uma borda inferior para indicar o estado ativo
  }
`;

// Linha que contém os elementos da segunda linha do Dashboard (MessageBox, PieChartComponent, etc.)
export const SecondLine = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os elementos sejam quebrados em várias linhas, se necessário
  justify-content: space-between; // Espaça os elementos igualmente
  width: 100%; // Define a largura para ocupar todo o espaço disponível
`;

// Linha que contém os elementos da terceira linha do Dashboard (HistoryBox, etc.)
export const ThirdLine = styled.div`
  display: flex;
  justify-content: center; // Centraliza os elementos horizontalmente
  margin-top: 20px; // Adiciona uma margem superior
  padding-bottom: 20px; // Adiciona um preenchimento inferior
`;

// Linha que contém os elementos da quarta linha do Dashboard (BarChartBox, etc.)
export const FourthLine = styled.div`
  display: flex;
  margin-top: 20px; // Adiciona uma margem superior
  justify-content: space-between; // Espaça os elementos igualmente
`;
