import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes de estilo

// Define a interface para as propriedades que serão passadas ao componente Container
interface IContainerProps {
  color: string; // Cor de fundo da caixa
}

// Define o componente de estilo Container com base na interface IContainerProps
export const Container = styled.div<IContainerProps>`
  width: 31.3%; // Largura do container
  height: 150px; // Altura do container
  margin: 10px 0; // Margem superior e inferior

  background-color: ${(props) =>
    props.color}; // Define a cor de fundo com base na prop "color"
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto com base no tema

  border-radius: 5px; // Define a borda arredondada
  padding: 10px 20px; // Padding interno

  position: relative; // Define a posição relativa para posicionar elementos filhos
  overflow: hidden; // Esconde elementos que ultrapassam os limites do container

  > img {
    height: 110%; // Altura da imagem maior que a altura do container
    position: absolute; // Posição absoluta para posicionamento personalizado
    top: -10px; // Posição superior da imagem
    right: -30px; // Posição direita da imagem
    opacity: 0.3; // Define a opacidade da imagem
  }

  > span {
    font-size: 18px; // Tamanho da fonte do texto
    font-weight: 500; // Define a espessura da fonte
  }

  > small {
    font-size: 10px; // Tamanho da fonte do texto
    position: absolute; // Posição absoluta para posicionamento personalizado
    bottom: 10px; // Posição inferior do texto
  }

  &:hover {
    opacity: 0.7; // Define a opacidade ao passar o mouse
    transform: scale(
      1.03
    ); // Aplica uma transformação de escala ao passar o mouse
  }
`;

// Define o componente de estilo Content
export const Content = styled.div`
  display: flex; // Define o layout flexível
  flex-direction: column; // Define a direção dos itens flexíveis como coluna
  justify-content: left; // Alinha os itens à esquerda
  height: 70%; // Define a altura do content
  font-size: 25px; // Tamanho da fonte do content
`;
