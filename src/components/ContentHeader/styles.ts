import styled from "styled-components"; // Importa a biblioteca styled-components

// Define uma interface para as propriedades que serão usadas no componente estilizado
interface IContainerProps {
  $lineColor: string; // Propriedade para definir a cor da linha
}

// Estiliza um contêiner principal para o cabeçalho
export const Container = styled.div`
  width: 100%; // Define a largura do contêiner para 100% do seu contêiner pai
  display: flex; // Utiliza flexbox para layout flexível
  justify-content: space-between; // Distribui o espaço disponível entre os itens
  border-bottom: 1px solid ${(props) => props.theme.colors.gray}; // Adiciona uma borda inferior com a cor definida no tema
`;

// Estiliza o contêiner do título, utilizando a interface IContainerProps para a cor da linha
export const TitleContainer = styled.h4<IContainerProps>`
  // injeta no container a interface IContainerProps para acessar a propriedade $lineColor
  > h1 {
    // Estiliza o elemento h1 dentro do TitleContainer
    color: ${(props) =>
      props.theme.colors
        .white}; // Define a cor do texto como branco, baseado no tema
    &::after {
      // Utiliza um pseudo-elemento ::after para adicionar uma linha decorativa
      content: ""; // Define o conteúdo vazio
      display: block; // Define a exibição como bloco
      width: 50px; // Define a largura da linha
      border-bottom: 8px solid ${(props) => props.$lineColor}; // Define a cor e a largura da borda inferior usando a propriedade $lineColor
    }
  }
`;

// Estiliza o contêiner dos controladores (elementos filhos)
export const Controllers = styled.div`
  display: flex; // Utiliza flexbox para layout flexível
`;
