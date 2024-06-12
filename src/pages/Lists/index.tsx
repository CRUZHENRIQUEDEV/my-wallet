import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters, FilterButton } from "./styles";

interface RouteParams {
  type: string;
}

const List: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const months = [
    { value: "01", label: "Janeiro" },
    { value: "02", label: "Fevereiro" },
    { value: "03", label: "Março" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Maio" },
    { value: "06", label: "Junho" },
    { value: "07", label: "Julho" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
  ];

  const years = [
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
  ];

  return (
    <Container>
      <ContentHeader title={title} lineColor="#f00b0b">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <FilterButton className="tag-filter-recurrent">
          Recorrentes
        </FilterButton>
        <FilterButton className="tag-filter-eventual">Eventuais</FilterButton>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de Luz"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de água"
          subTitle="27/07/2021"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
