import React, { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    console.log("mudou");
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={checked}
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
