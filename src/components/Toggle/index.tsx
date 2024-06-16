import React from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";
import { useTheme } from "../../hooks/theme";

const Toggle: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={theme.title === "dark"}
        onChange={handleChange}
        uncheckedIcon={false}
        checkedIcon={false}
        handleDiameter={30}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
