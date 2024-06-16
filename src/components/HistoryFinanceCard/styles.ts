import styled from "styled-components"; // Importa a biblioteca styled-components

// Define uma interface para as propriedades que serão usadas no componente estilizado
interface ITagProps {
  color: string; // Propriedade para definir a cor do Tag
}

// Estiliza o contêiner principal para o cartão de histórico financeiro
export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.tertiary}; // Define a cor de fundo com base no tema

  list-style: nome; // Define o estilo da lista (não faz nada no contexto atual, pode ser um erro de digitação)
  border-radius: 10px; // Define um raio de borda para tornar os cantos arredondados

  margin: 10px; // Define a margem ao redor do contêiner
  padding: 15px 10px; // Define o preenchimento interno do contêiner

  display: flex; // Utiliza flexbox para layout flexível
  justify-content: space-between; // Distribui o espaço disponível entre os itens filhos
  align-items: center; // Alinha os itens no centro verticalmente

  cursor: pointer; // Define o cursor como pointer para indicar que o contêiner é clicável
  transition: all 0.3s; // Adiciona uma transição suave para todas as propriedades que mudam

  position: relative; // Define a posição relativa para o contêiner

  &:hover {
    // Define os estilos para quando o contêiner for "hovered"
    opacity: 0.7; // Define a opacidade para 0.7
    transform: scale(1.03); // Aumenta o tamanho do contêiner em 3%
  }

  > div {
    // Estiliza os divs filhos diretos do contêiner
    display: flex; // Utiliza flexbox para layout flexível
    flex-direction: column; // Define a direção do flexbox como coluna
    justify-content: space-between; // Distribui o espaço disponível entre os itens filhos
    padding-left: 10px; // Adiciona um preenchimento à esquerda

    > span {
      // Estiliza os spans filhos diretos do div
      font-size: 15px; // Define o tamanho da fonte
      font-weight: bold; // Define o peso da fonte como negrito
    }
  }
`;

// Estiliza o Tag para o cartão de histórico financeiro
export const Tag = styled.div<ITagProps>`
  width: 10px; // Define a largura do Tag
  height: 60%; // Define a altura do Tag como 60% da altura do contêiner pai

  background-color: ${(props) =>
    props.color}; // Define a cor de fundo com base na propriedade color

  position: absolute; // Define a posição como absoluta
  left: 5px; // Define a posição à esquerda como 5px
`;
