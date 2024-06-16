import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes de estilo

// Define o componente de estilo Container
export const Container = styled.div`
  color: ${(props) => props.theme.colors.white}; // Define a cor do texto com base na cor branca definida no tema
  background-color: ${(props) => props.theme.colors.primary}; // Define a cor de fundo com base na cor primária definida no tema
  padding: 25px; // Define um padding de 25 pixels em todos os lados
  display: flex; // Define o layout flexível para o container
  justify-content: flex-end; // Alinha os itens flexíveis ao final do container, à direita
`;
