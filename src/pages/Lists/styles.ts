import styled from "styled-components";

// Estilo para o container principal
export const Container = styled.div`
  padding: 20px; // Espaçamento interno de 20px
  background-color: ${(props) =>
    props.theme.colors.primary}; // Cor de fundo primária definida no tema
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto definida no tema
`;

// Estilo para o conteúdo
export const Content = styled.div`
  padding: 20px; // Espaçamento interno de 20px
  background-color: ${(props) =>
    props.theme.colors.primary}; // Cor de fundo primária definida no tema
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto definida no tema
`;

// Estilo para os filtros
export const Filters = styled.div`
  width: 100%; // Largura total
  display: flex; // Usa flexbox para organizar os filhos
  justify-content: center; // Centraliza os filhos horizontalmente
  margin-bottom: 30px;
`;

// Estilo para os botões de filtro
export const FilterButton = styled.button`
  font-size: 18px;
  font-weight: 500; // Peso da fonte semi-negrito
  background: none; // Sem fundo
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto branca definida no tema
  margin: 0 10px; // Margem horizontal de 10px
  transition: opacity 0.3s; // Transição suave para opacidade

  // Define o efeito de opacidade ao passar o mouse sobre o botão
  &:hover {
    opacity: 0.7;
  }

  // Estilo adicional para o botão de filtro recorrente
  &.tag-filter-recurrent::after {
    content: ""; // Adiciona conteúdo vazio
    display: block; // Exibe como bloco
    width: 55px;
    margin: 0 auto; // Centraliza horizontalmente
    border-bottom: 10px; // Define a largura da borda inferior
    border-color: #df9f4b; // Cor da borda inferior
    border-style: solid; // Estilo da borda sólida
  }

  // Estilo adicional para o botão de filtro eventual
  &.tag-filter-eventual::after {
    content: ""; // Adiciona conteúdo vazio
    display: block; // Exibe como bloco
    width: 55px;
    margin: 0 auto; // Centraliza horizontalmente
    border-bottom: 10px solid ${(props) => props.theme.colors.success}; // Define a largura, cor e estilo da borda inferior
  }
`;
