import React from "react"; // Importa o React para criar componentes
import { Container, Content } from "./styles"; // Importa os componentes de estilo personalizados
import CountUp from "react-countup"; // Importa a biblioteca CountUp para animação de contagem

// Importa as imagens dos ícones
import dollarImage from "../../assets/dollar.svg";
import arrowUpImage from "../../assets/arrow-up.svg";
import arrowDownImage from "../../assets/arrow-down.svg";

// Define a interface para as propriedades que o componente WalletBox receberá
interface IWalletBoxProps {
  title: string; // Título da caixa
  amount: number; // Quantia a ser exibida
  footerLabel: string; // Rótulo do rodapé
  icon: "dollar" | "arrowUp" | "arrowDown"; // Tipo de ícone a ser exibido
  color: string; // Cor do fundo da caixa
}

// Define o componente WalletBox
const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  // Função para selecionar a imagem do ícone com base no valor da prop "icon"
  const iconSelected = () => {
    switch (icon) {
      case "dollar":
        return dollarImage;
      case "arrowUp":
        return arrowUpImage;
      case "arrowDown":
        return arrowDownImage;
      default:
        return undefined;
    }
  };

  return (
    <Container color={color}> {/* Define a cor do fundo da caixa */}
      <span>{title}</span> {/* Exibe o título da caixa */}
      <Content>
        {/* Componente CountUp para animar a contagem do valor */}
        <CountUp
          end={amount} // Valor final da contagem
          prefix={"R$ "} // Prefixo da contagem
          separator="." // Separador de milhar
          decimal="," // Separador decimal
          decimals={2} // Número de casas decimais
          duration={1.5} // Duração da animação em segundos
        />
      </Content>
      <small>{footerLabel}</small> {/* Exibe o rótulo do rodapé */}
      <img src={iconSelected()} alt={title} /> {/* Exibe a imagem do ícone */}
    </Container>
  );
};

export default WalletBox; // Exporta o componente para uso em outros lugares
