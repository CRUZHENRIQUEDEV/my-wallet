import styled from "styled-components";

/**
 *Layout
 *MH = MainHeader
 *AS = Aside
 *CT = Content
 */
export const Grid = styled.div`
  //Estilização do grid
  display: grid; //Exibe o grid
  grid-template-columns: 250px auto; //Tamanho do menu
  grid-template-rows: 70px auto; //Tamanho do cabeçalho
  grid-template-areas: //Áreas do grid
    "AS MH" //Área do menu
    "AS CT"; //Área do conteúdo

  height: 100vh; //Ocupa toda a tela
`;

export {};
