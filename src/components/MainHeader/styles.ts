import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.colors.white};

  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  justify-content: space-between;

  padding: 0 10px;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  grid-area: MH;

  background-color: ${(props) => props.theme.colors.secondary};

  display: flex;
  flex-direction: column; /* Alinhar itens na direção da coluna */
  padding-right: 0 10px;
`;

export const Welcome = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const UserName = styled.span`
  font-weight: 500;
  margin-top: 0px; /* Adicionar espaço entre 'Welcome' e 'UserName' */
`;

export {};
