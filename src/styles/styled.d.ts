import "styled-components"; // Importa o módulo "styled-components"

// Declaração do módulo "styled-components" para estender a interface DefaultTheme
declare module "styled-components" {
  // Define a interface DefaultTheme
  export interface DefaultTheme {
    title: string; // Propriedade para o título do tema

    // Propriedades para as cores do tema
    colors: {
      primary: string; // Cor primária
      secondary: string; // Cor secundária
      tertiary: string; // Cor terciária

      white: string; // Cor branca
      black: string; // Cor preta
      gray: string; // Cor cinza

      success: string; // Cor de sucesso
      info: string; // Cor de informação
      warning: string; // Cor de aviso
    };
  }
}
