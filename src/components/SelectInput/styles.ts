import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 3px;
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */

  select {
    padding: 7px 5px;
    border-radius: 5px;
    margin-left: 5px; /* Garante que o select não fique colado ao botão */
  }
`;

export {};
