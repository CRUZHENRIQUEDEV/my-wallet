import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes estilizados

// Define um componente Container estilizado utilizando styled-components
export const Container = styled.div`
  color: ${(props) => props.theme.colors.white}; // Define a cor do texto baseado no tema
  background-color: ${(props) => props.theme.colors.primary}; // Define a cor de fundo baseado no tema

  padding: 25px; // Adiciona preenchimento interno de 25px em todos os lados

  height: calc(100vh - 70px); // Define a altura do contêiner como a altura total da tela menos 70px
  overflow-y: scroll; // Habilita a rolagem vertical se o conteúdo ultrapassar a altura do contêiner

  // Estiliza a barra de rolagem para navegadores Webkit (como Chrome e Safari)
  ::-webkit-scrollbar {
    width: 10px; // Define a largura da barra de rolagem
  }

  // Estiliza o "polegar" da barra de rolagem (a parte que se move)
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary}; // Define a cor do polegar baseado no tema
    border-radius: 10px; // Define bordas arredondadas para o polegar
  }

  // Estiliza a trilha da barra de rolagem (a área por onde o polegar se move)
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary}; // Define a cor da trilha baseado no tema
  }
`;

// Exporta um objeto vazio para que o arquivo seja considerado um módulo pelo TypeScript
export {};
