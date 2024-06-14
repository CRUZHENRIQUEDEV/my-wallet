import React from "react";
import { Container, Content } from "./styles";
import CountUp from "react-countup";

import dollarImage from "../../assets/dollar.svg";
import arrowUpImage from "../../assets/arrow-up.svg";
import arrowDownImage from "../../assets/arrow-down.svg";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dollar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
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
    <Container color={color}>
      <span>{title}</span>
      <Content>
        <CountUp
          end={amount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
          duration={1.5}
        />
      </Content>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default WalletBox;
