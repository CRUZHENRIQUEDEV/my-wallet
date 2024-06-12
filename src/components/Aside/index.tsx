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
  MenuItem,
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
        <MenuItem>
          <MdDashboard />
          <MenuItemLink href="/dashboard">Dashboard</MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MdArrowDownward />
          <MenuItemLink href="/list/entry-balance">Entradas</MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MdArrowUpward />
          <MenuItemLink href="/list/exit-balance">Saídas</MenuItemLink>
        </MenuItem>

        <MenuItem>
          <MdExitToApp />
          <MenuItemLink href="#">Sair</MenuItemLink>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
