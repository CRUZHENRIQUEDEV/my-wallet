import React from "react";
import { Container } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, onChange }) => {
  return (
    <Container>
      <select onChange = {onChange}>
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
