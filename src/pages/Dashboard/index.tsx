import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Lucas", label: "Lucas" },
    { value: "Ana", label: "Ana" },
    { value: "Maria", label: "Maria" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#ffff">
        {<SelectInput options={options} />}
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
