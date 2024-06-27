// src/pages/List/index.tsx
import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Content, Filters, FilterButton } from "./styles";

import expenses from "../../../src/data/expenses.json";
import gains from "../../../src/data/gains.json";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

// Define a interface para os dados que serão exibidos
interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

// Componente principal que exibe a lista de transações
const List: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );
  const [frequencyFilter, setFrequencyFilter] = useState<string | null>(null);

  const title = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#22f13e",
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
        };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const months = useMemo(() => {
    return [
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
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: String(year),
        label: String(year),
      };
    });
  }, [listData]);

  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear());
      const frequencyMatch = frequencyFilter
        ? item.frequency === frequencyFilter
        : true;

      return month === monthSelected && year === yearSelected && frequencyMatch;
    });

    const formattedData = filteredData.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#df9f4b" : "#4E41F0",
      };
    });

    setData(formattedData);
  }, [listData, monthSelected, yearSelected, frequencyFilter]);

  const handleFrequencyClick = (frequency: string | null) => {
    setFrequencyFilter(frequency);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonthSelected(e.target.value);
    setFrequencyFilter(null);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYearSelected(e.target.value);
    setFrequencyFilter(null);
  };

  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <SelectInput
          options={months}
          onChange={handleMonthChange}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={handleYearChange}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <FilterButton
          className={`tag-filter-recurrent ${
            frequencyFilter === "recorrente" ? "tag-actived" : ""
          }`}
          onClick={() =>
            handleFrequencyClick(
              frequencyFilter !== "recorrente" ? "recorrente" : null
            )
          }
        >
          Recorrentes
        </FilterButton>
        <FilterButton
          className={`tag-filter-eventual ${
            frequencyFilter === "eventual" ? "tag-actived" : ""
          }`}
          onClick={() =>
            handleFrequencyClick(
              frequencyFilter !== "eventual" ? "eventual" : null
            )
          }
        >
          Eventuais
        </FilterButton>
      </Filters>

      <Content>
        {data.length === 0 ? (
          <HistoryFinanceCard
            key="no-data"
            tagColor="#FF6347"
            title="Nenhum lançamento para o período selecionado"
            subTitle={""}
            amount=""
          />
        ) : (
          data.map((item) => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subTitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        )}
      </Content>
    </Container>
  );
};

export default List;
