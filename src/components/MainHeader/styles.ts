import styled from "styled-components"; // Importa a biblioteca styled-components para estilização

// Estilização do contêiner principal do cabeçalho
export const Container = styled.div`
  grid-area: MH; // Define a área do grid para MainHeader
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto baseada no tema

  background-color: ${(props) =>
    props.theme.colors.secondary}; // Define a cor de fundo baseada no tema

  display: flex; // Define o layout flexível
  border-bottom: 1px solid ${(props) => props.theme.colors.gray}; // Adiciona uma borda inferior

  justify-content: space-between; // Espaça os itens dentro do contêiner igualmente

  padding: 0 10px; // Adiciona preenchimento nas laterais

  border-bottom: 1px solid ${(props) => props.theme.colors.gray}; // Adiciona novamente a borda inferior
`;

// Estilização do perfil do usuário
export const Profile = styled.div`
  grid-area: MH; // Define a área do grid para MainHeader

  background-color: ${(props) =>
    props.theme.colors.secondary}; // Define a cor de fundo baseada no tema

  display: flex; // Define o layout flexível
  flex-direction: column; /* Alinha itens na direção da coluna */
  padding-right: 10px; // Adiciona preenchimento à direita
`;

// Estilização da mensagem de boas-vindas
export const Welcome = styled.h3`
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto baseada no tema
`;

// Estilização do nome do usuário
export const UserName = styled.span`
  font-weight: 500; // Define a espessura da fonte
  margin-top: 4px; // Adicionar espaço entre 'Welcome' e 'UserName'
`;

export {};
