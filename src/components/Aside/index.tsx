import React from "react";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
  MdAttachMoney,
} from "react-icons/md";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import logImg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Aside: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <Header onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <LogImg src={logImg} alt="Logo My Wallet" />
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>

        <MenuItemLink href="/money-exchange">
          <MdAttachMoney />
          Cotações
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
