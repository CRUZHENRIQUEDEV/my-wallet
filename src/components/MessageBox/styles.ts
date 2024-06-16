import styled from "styled-components"; // Importa a biblioteca styled-components para criar componentes de estilo

// Define um componente de estilo chamado Container
export const Container = styled.div`
  width: 48%; // Define a largura do contêiner como 48% do elemento pai
  height: 260px; // Define a altura fixa do contêiner

  background-color: ${(props) =>
    props.theme.colors
      .tertiary}; // Define a cor de fundo com base no tema atual
  color: ${(props) =>
    props.theme.colors.white}; // Define a cor do texto com base no tema atual

  border-radius: 7px; // Define bordas arredondadas com raio de 7px
  margin: 10px 0; // Define uma margem de 10px na parte superior e inferior
  padding: 30px 20px; // Define um preenchimento interno de 30px na parte superior e inferior e 20px nas laterais

  display: flex; // Define que o contêiner será flexível
  flex-direction: column; // Define a direção dos itens flexíveis como coluna
  justify-content: space-between; // Espaça uniformemente os itens dentro do contêiner

  // Estilo para a tag <img> dentro do header
  > header img {
    width: 35px; // Define a largura da imagem como 35px
    margin-left: 7px; // Define uma margem à esquerda da imagem
  }

  // Estilo para a tag <p> dentro do header
  > header p {
    font-size: 18px; // Define o tamanho da fonte como 18px
  }

  // Adiciona um efeito de hover ao contêiner
  &:hover {
    opacity: 0.7s; // Define a opacidade ao passar o mouse (errado, deve ser 0.7 sem 's')
    transform: scale(
      1.03
    ); // Aumenta o tamanho do contêiner em 3% ao passar o mouse
  }
`;
