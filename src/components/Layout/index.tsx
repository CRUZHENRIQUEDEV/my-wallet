import React, { ReactNode } from "react"; // Importa React e ReactNode do pacote react
import { Grid } from "./styles"; // Importa o componente estilizado Grid
import MainHeader from "../MainHeader"; // Importa o componente MainHeader
import Aside from "../Aside"; // Importa o componente Aside
import Content from "../Content"; // Importa o componente Content

// Define a interface para as propriedades que o componente Layout receberá
interface LayoutProps {
  children: ReactNode; // children será do tipo ReactNode, permitindo que qualquer elemento React seja passado como filho
}

// Define o componente funcional Layout
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Renderiza o componente Grid como contêiner principal
    <Grid>
      <MainHeader /> {/* Renderiza o componente MainHeader */}
      <Aside /> {/* Renderiza o componente Aside */}
      <Content>{children}</Content>{" "}
      {/* Renderiza o componente Content e passa os filhos */}
    </Grid>
  );
};

export default Layout; // Exporta o componente Layout para ser usado em outros lugares
