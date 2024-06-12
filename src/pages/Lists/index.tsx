import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";
const List: React.FC = () => {
  const options = [
    { value: "Teste1", label: "Teste1" },
    { value: "Teste2", label: "Teste2" },
    { value: "Teste3", label: "Teste3" },
  ];
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#f00b0b">
        {<SelectInput options={options} />}
      </ContentHeader>
    </Container>
  );
};
export default List;
