import styled from "styled-components";

// Define um componente de estilo chamado Container usando styled-components
export const Container = styled.div`
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto com base no tema
  background-color: ${(props) =>
    props.theme.colors.primary}; // Define a cor de fundo com base no tema
  padding: 10px; // Adiciona espaçamento interno de 10px em todos os lados
  display: flex; // Usa flexbox para organizar o conteúdo interno
  justify-content: flex-end; // Alinha o conteúdo à direita

  // Estilo para o elemento select dentro do Container
  select {
    padding: 7px 5px; // Adiciona espaçamento interno ao select (7px vertical, 5px horizontal)
    border-radius: 10px; // Adiciona bordas arredondadas ao select
    margin-left: 5px; // Adiciona margem à esquerda do select para espaçamento
  }
`;

export {}; // Exporta um objeto vazio para evitar erro de módulo vazio
