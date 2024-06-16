import styled from "styled-components";

// Define o estilo do contêiner principal do componente
export const Container = styled.div`
  width: 48%; // Largura do contêiner
  height: 260px; // Altura do contêiner
  padding: 10px; // Espaçamento interno (padding)
  background-color: ${(props) =>
    props.theme.colors.tertiary}; // Cor de fundo, puxada do tema
  color: ${(props) => props.theme.colors.white}; // Cor do texto, puxada do tema
  border-radius: 7px; // Borda arredondada
  display: flex; // Utiliza flexbox para layout interno
  justify-content: space-between; // Distribui os itens com espaço entre eles
  &:hover {
    opacity: 0.7s; // Efeito de opacidade ao passar o mouse
    transform: scale(1.03); // Aumenta o tamanho em 3% ao passar o mouse
  }
`;

// Define o estilo para o lado esquerdo do componente
export const SideLeft = styled.aside`
  flex: 1; // Flex-grow: permite que o elemento cresça para preencher o espaço disponível
  padding: 30px 20px; // Espaçamento interno (padding)

  > h2 {
    // Estilo para o título dentro de SideLeft (se necessário)
  }
`;

// Define o estilo para o lado direito do componente
export const SideRight = styled.main`
  flex: 1; // Flex-grow: permite que o elemento cresça para preencher o espaço disponível
  display: flex; // Utiliza flexbox para layout interno
  flex-direction: column; // Alinha itens em uma coluna
  justify-content: center; // Alinha itens no centro verticalmente
  align-items: center; // Alinha itens no centro horizontalmente
  padding-top: 20px; // Espaçamento interno no topo

  ul {
    list-style: none; // Remove os marcadores da lista
    padding: 0; // Remove o padding padrão da lista
  }

  li {
    display: flex; // Utiliza flexbox para layout interno
    align-items: center; // Alinha itens no centro verticalmente
    margin-bottom: 10px; // Espaçamento inferior entre os itens da lista

    span {
      display: block; // Exibe como bloco
      width: 45px; // Largura da caixa do span
      height: 45px; // Altura da caixa do span
      border-radius: 5px; // Borda arredondada
      font-size: 14px; // Tamanho da fonte
      line-height: 45px; // Altura da linha, centraliza o texto verticalmente
      text-align: center; // Centraliza o texto horizontalmente
      margin-right: 10px; // Espaçamento à direita do span
    }

    strong {
      font-size: 14px; // Tamanho da fonte para o texto forte (negrito)
    }
  }
`;

// Define o estilo para o contêiner da legenda
export const LegendContainer = styled.ul`
  list-style: none; // Remove os marcadores da lista
  height: 175px; // Altura do contêiner
  padding-right: 15px; // Espaçamento interno à direita
  overflow-y: scroll; // Habilita a rolagem vertical
  ::-webkit-scrollbar {
    width: 10px; // Largura da barra de rolagem
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.colors.secondary}; // Cor do polegar da barra de rolagem
    border-radius: 10px; // Borda arredondada do polegar
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) =>
      props.theme.colors.tertiary}; // Cor do trilho da barra de rolagem
  }
`;

// Define o estilo para cada item da legenda
export const Legend = styled.main`
  display: flex; // Utiliza flexbox para layout interno
  align-items: center; // Alinha itens no centro verticalmente
  margin-bottom: 7px; // Espaçamento inferior entre os itens
  padding: 30px 20px; // Espaçamento interno (padding)

  > div {
    background-color: ${(props) =>
      props.theme.colors.secondary}; // Cor de fundo do div
    width: 45px; // Largura do div
    height: 45px; // Altura do div
    border-radius: 5px; // Borda arredondada
    font-size: 18px; // Tamanho da fonte
    line-height: 40px; // Altura da linha
    text-align: center; // Centraliza o texto horizontalmente
  }
  > span {
    margin-left: 5px; // Espaçamento à esquerda do span
  }
`;
