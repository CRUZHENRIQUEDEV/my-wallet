import React from "react";
import { Container } from "./styles"; // Importa o componente de estilo

// Define a interface para as propriedades que o componente receberá
interface IMessageBoxProps {
  title: string; // Título da mensagem
  description: string; // Descrição da mensagem
  footerText: string; // Texto do rodapé
  icon: string; // URL ou caminho do ícone
}

// Define o componente funcional MessageBox
const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    // Contêiner principal do componente
    <Container>
      <header>
        <h1>
          {title}
          {/* Exibe o ícone ao lado do título */}
          <img src={icon} alt={title} />
        </h1>
      </header>
      {/* Exibe a descrição da mensagem */}
      <p>{description}</p>
      <footer>
        {/* Exibe o texto do rodapé */}
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

export default MessageBox; // Exporta o componente para uso em outros lugares
