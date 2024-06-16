import styled from "styled-components";

// Define o container principal para o menu lateral
export const Container = styled.div`
  grid-area: AS; // Área do grid layout onde o container será posicionado
  background-color: ${(props) =>
    props.theme.colors
      .secondary}; // Cor de fundo usando a cor secundária do tema
  padding-left: 20px; // Espaçamento interno à esquerda

  border-right: 1px solid ${(props) => props.theme.colors.gray}; // Borda direita usando a cor cinza do tema
`;

// Define o cabeçalho do menu lateral
export const Header = styled.header`
  height: 70px; // Altura do cabeçalho
  display: flex; // Usado para alinhar itens em linha
  align-items: center; // Centraliza verticalmente os itens dentro do cabeçalho
`;

// Define o estilo da imagem da logo
export const LogImg = styled.img`
  width: 40px; // Largura da imagem
  height: 40px; // Altura da imagem
`;

// Define o estilo do título no cabeçalho
export const Title = styled.h3`
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto usando a cor branca do tema
  margin-left: 10px; // Espaçamento à esquerda do título
`;

// Define o container para os itens do menu
export const MenuContainer = styled.nav`
  display: flex; // Usado para alinhar itens em coluna
  flex-direction: column; // Alinha itens em coluna
  margin-top: 50px; // Margem superior do container
  margin: 7px 0; // Margem vertical dos itens do menu
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto usando a cor branca do tema
`;

// Define o estilo para os links dos itens do menu
export const MenuItemLink = styled.a`
  color: ${(props) =>
    props.theme.colors.white}; // Cor do texto usando a cor branca do tema
  text-decoration: none; // Remove a decoração do texto (sublinhado)

  margin: 7px 0; // Margem vertical dos itens do menu
  display: flex; // Usado para alinhar itens em linha
  align-items: center; // Centraliza verticalmente os itens dentro do link

  transition: opacity 0.3s; // Transição suave para a opacidade
  &:hover {
    opacity: 0.7; // Reduz a opacidade para 70% ao passar o mouse
  }

  > svg {
    font-size: 20px; // Tamanho do ícone
    margin-right: 5px; // Espaçamento à direita do ícone
  }
`;
