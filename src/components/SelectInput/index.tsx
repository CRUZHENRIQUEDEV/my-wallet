import React from "react";
import { Container } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
}

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
