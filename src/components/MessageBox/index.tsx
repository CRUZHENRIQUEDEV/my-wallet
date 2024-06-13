import React, { ReactNode } from "react";
import { Container } from "./styles";

import happyImg from "../../../assets/happy.svg";

const MessageBox: React.FC = () => {
  return (
    <Container>
      <h1>
        Muito bem!
        <img src={happyImg} alt="" />
      </h1>
    </Container>
  );
};
