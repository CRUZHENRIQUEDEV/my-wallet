import React, { ReactNode } from "react"; // Importa React e o tipo ReactNode

// Importa o estilo Container de um arquivo separado
import { Container } from "./styles";

// Define a interface para as propriedades que o componente receberá
interface ContentProps {
  children: ReactNode; // O tipo ReactNode é usado para permitir que qualquer tipo de elemento React seja passado como filho
}

// Define o componente funcional Content
const Content: React.FC<ContentProps> = ({ children }) => {
  // O componente recebe as propriedades e desestrutura a propriedade children
  return <Container>{children}</Container>; // Renderiza o Container com os filhos passados
};

export default Content; // Exporta o componente para uso em outros lugares
