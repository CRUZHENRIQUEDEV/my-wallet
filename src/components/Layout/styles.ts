import styled from "styled-components"; // Importa a biblioteca styled-components

/**
 * Layout
 * MH = MainHeader
 * AS = Aside
 * CT = Content
 */
export const Grid = styled.div`
  // Estilização do grid
  display: grid; // Define o display como grid
  grid-template-columns: 250px auto; // Define as colunas do grid: primeira coluna fixa de 250px e a segunda coluna ocupa o restante
  grid-template-rows: 70px auto; // Define as linhas do grid: primeira linha fixa de 70px e a segunda linha ocupa o restante
  grid-template-areas: // Define as áreas nomeadas do grid
    "AS MH" // Primeira linha: AS (Aside) e MH (MainHeader)
    "AS CT"; // Segunda linha: AS (Aside) e CT (Content)

  height: 100vh; // Define a altura do grid para ocupar toda a altura da tela
`;

export {}; // Exporta um objeto vazio para evitar um erro de módulo vazio
