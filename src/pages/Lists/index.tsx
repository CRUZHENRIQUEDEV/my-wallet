import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./styles";
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

      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de água "
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de telefone"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};
export default List;
