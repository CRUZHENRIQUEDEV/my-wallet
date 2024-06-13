import React from "react";
import { Container } from "./styles";

// Define a interface para as opções do seletor
interface Option {
  value: string;
  label: string;
}

// Define a interface para as propriedades do componente SelectInput
interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined; // Função para lidar com mudanças no seletor
  defaultValue?: string; // Valor padrão do seletor
}

// Componente de entrada de seleção
const SelectInput: React.FC<SelectInputProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
