// Importações necessárias do React e outras bibliotecas
import React from "react";
import {
  MdArrowDownward, // Ícone para "Entradas"
  MdArrowUpward, // Ícone para "Saídas"
  MdDashboard, // Ícone para "Dashboard"
  MdExitToApp, // Ícone para "Sair"
} from "react-icons/md";
import {
  Container, // Container para o layout do menu lateral
  Header, // Cabeçalho do menu lateral
  LogImg, // Componente para exibir a imagem da logo
  Title, // Título no cabeçalho do menu lateral
  MenuContainer, // Container para os itens do menu
  MenuItemLink, // Componente para os links dos itens do menu
} from "./styles";
import logImg from "../../assets/logo.svg"; // Importa a imagem da logo
import { useNavigate } from "react-router-dom"; // Hook para navegação programática

// Definição do componente funcional Aside
const Aside: React.FC = () => {
  // Cria uma instância do hook useNavigate para navegação
  const navigate = useNavigate();

  // Função para lidar com o clique na logo ou no título
  const handleLogoClick = () => {
    // Navega para a página do dashboard
    navigate("/dashboard");
  };

  return (
    // Container principal do menu lateral
    <Container>
      {/* Cabeçalho com logo e título, tornando clicável para navegação */}
      <Header onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <LogImg src={logImg} alt="Logo My Wallet" /> {/* Imagem da logo */}
        <Title>My Wallet</Title> {/* Título "My Wallet" */}
      </Header>

      {/* Container para os itens do menu */}
      <MenuContainer>
        {/* Item do menu para o Dashboard */}
        <MenuItemLink href="/dashboard">
          <MdDashboard /> {/* Ícone do Dashboard */}
          Dashboard {/* Texto do link */}
        </MenuItemLink>

        {/* Item do menu para "Entradas" */}
        <MenuItemLink href="/list/entry-balance">
          <MdArrowDownward /> {/* Ícone para "Entradas" */}
          Entradas {/* Texto do link */}
        </MenuItemLink>

        {/* Item do menu para "Saídas" */}
        <MenuItemLink href="/list/exit-balance">
          <MdArrowUpward /> {/* Ícone para "Saídas" */}
          Saídas {/* Texto do link */}
        </MenuItemLink>

        {/* Item do menu para "Sair" */}
        <MenuItemLink href="#">
          <MdExitToApp /> {/* Ícone para "Sair" */}
          Sair {/* Texto do link */}
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

// Exporta o componente Aside como o padrão deste módulo
export default Aside;
