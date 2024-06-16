import { createGlobalStyle } from "styled-components"; // Importa a função createGlobalStyle do styled-components

// Define os estilos globais da aplicação
export default createGlobalStyle`
  * {
    margin: 0; // Remove a margem de todos os elementos
    padding: 0; // Remove o preenchimento de todos os elementos
    box-sizing: border-box; // Define o box-sizing para border-box, incluindo bordas e preenchimentos no tamanho total dos elementos
  }

  html, body, #root {
    max-height: 100vh; // Define a altura máxima como 100% da altura da viewport
    max-width: 100vw; // Define a largura máxima como 100% da largura da viewport
    height: 100%; // Define a altura como 100%
    width: 100%; // Define a largura como 100%
  }

  *, button, input {
    border: 0; // Remove a borda de todos os elementos, botões e inputs
    outline: 0; // Remove o contorno de todos os elementos, botões e inputs
    font-family: 'Roboto', sans-serif; // Define a fonte padrão para 'Roboto', usando 'sans-serif' como fallback
  }

  button {
    cursor: pointer; // Define o cursor como pointer (mãozinha) para botões
  }

  body {
    background-color: ${(props) =>
      props.theme.colors
        .primary}; // Define a cor de fundo do body com base no tema atual
    color: ${(props) =>
      props.theme.colors
        .white}; // Define a cor do texto do body com base no tema atual
  }
`;
