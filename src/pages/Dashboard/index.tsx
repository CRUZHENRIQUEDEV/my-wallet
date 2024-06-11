import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
