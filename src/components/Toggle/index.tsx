import React from "react"; // Importa a biblioteca React

import { useTheme } from "../../hooks/theme"; // Importa o hook useTheme para gerenciar o tema da aplicação

import { Container, ToggleLabel, ToggleSelector } from "./styles"; // Importa os estilos do componente

// Define a interface para as propriedades que o componente receberá
interface IToogleProps {
  labelLeft: string; // Rótulo do lado esquerdo do toggle
  labelRight: string; // Rótulo do lado direito do toggle
  checked: boolean; // Estado do toggle (ligado/desligado)
  onChange(): void; // Função a ser chamada quando o toggle mudar
}

// Define o componente funcional Toggle
const Toggle: React.FC<IToogleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => {
  return (
    <Container>
      {/* Rótulo do lado esquerdo */}
      <ToggleLabel>{labelLeft}</ToggleLabel>
      {/* Componente de seleção do toggle */}
      <ToggleSelector
        checked={checked} // Define se o toggle está ligado ou desligado
        onChange={onChange} // Função chamada quando o estado do toggle muda
        uncheckedIcon={false} // Ícone para o estado desligado
        checkedIcon={false} // Ícone para o estado ligado
      />
      {/* Rótulo do lado direito */}
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
};

export default Toggle; // Exporta o componente para uso em outros lugares
