import React from "react";

import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
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

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logImg} alt="Logo My Wallet" />
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MdDashboard />
        <MenuItemLink href="/dashboard">Dashboard</MenuItemLink>

        <MdArrowDownward />
        <MenuItemLink href="/list/entry-balance">Entradas</MenuItemLink>

        <MdArrowUpward />
        <MenuItemLink href="/list/exit-balance">Saídas</MenuItemLink>

        <MdExitToApp />
        <MenuItemLink href="#">Sair</MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
