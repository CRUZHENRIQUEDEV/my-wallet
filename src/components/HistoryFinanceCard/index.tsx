import React from "react";
import { Container, Tag } from "./styles";

// Definição das propriedades que o componente espera receber
interface IHistoryFinanceCardProps {
    tagColor: string; // Cor da tag que será usada como um indicador visual
    title: string; // Título do cartão de histórico financeiro
    subTitle: string; // Subtítulo do cartão de histórico financeiro
    amount: string; // Valor financeiro a ser exibido no cartão
}

// Definição do componente funcional HistoryFinanceCard
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    tagColor, // Cor da tag passada como prop
    title, // Título passado como prop
    subTitle, // Subtítulo passado como prop
    amount // Valor passado como prop
}) => {
  return (
    // Contêiner principal do cartão
    <Container>
        {/* Tag colorida usada como um indicador visual */}
        <Tag color={tagColor} />
        
        {/* Div para conter o título e o subtítulo */}
        <div>
            {/* Título do cartão */}
            <span>{title}</span>
            {/* Subtítulo do cartão */}
            <small>{subTitle}</small>
        </div>
        
        {/* Valor financeiro exibido em destaque */}
        <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
