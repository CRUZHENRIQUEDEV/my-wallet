import React, { ReactNode } from "react";
import { Container } from "./styles";

;

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <Container>
      <h1>
        {title}
        <img src={icon} alt={title} />
      </h1>
      <p>{description}</p>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
