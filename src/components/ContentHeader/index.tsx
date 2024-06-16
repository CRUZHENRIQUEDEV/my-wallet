import React from "react"; // Importa a biblioteca React
import { Container, TitleContainer, Controllers } from "./styles"; // Importa componentes estilizados

// Define a interface para as propriedades que o componente ContentHeader receberá
interface IContentleHeaderProps {
  title: string; // Título a ser exibido no cabeçalho
  lineColor: string; // Cor da linha sob o título
  children: React.ReactNode; // Elementos filhos a serem renderizados dentro do componente
}

// Define o componente funcional ContentHeader
const ContentHeader: React.FC<IContentleHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      {/* Título do cabeçalho com a cor da linha */}
      <TitleContainer $lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      {/* Controladores passados como children */}
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader; // Exporta o componente para ser usado em outros arquivos
