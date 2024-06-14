import React, { useState, useMemo, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { Container, ContentWalletBox, Filters, FilterButton } from "./styles";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import MessageBox from "../../components/MessageBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import WalletBox from "../../components/WalletBox";
// import MessageBox  from "../../components/MessageBox";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );
  const [data, setData] = useState<IData[]>([]);
  const { type } = useParams<{ type: string }>();
  const [frequencyFilter, setFrequencyFilter] = useState<string | null>(null);

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

    [...expenses, ...gains].forEach((item) => {
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
      <ContentHeader title="Dashboard" lineColor="#ffff">
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
      <ContentWalletBox>
        <WalletBox
          title="Saldo"
          amount={1500}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4caf50"
        />
        <WalletBox
          title="Entradas"
          amount={1500}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#2196f3"
        />
        <WalletBox
          title="Saídas"
          amount={1500}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f44336"
        />
      </ContentWalletBox>
      <MessageBox
        title="Muito bem!"
        description="Sua carteira está positiva"
        footerText="Continue assim. Considere investir o seu saldo."
        icon={sadImg}
      />
    </Container>
  );
};

export default Dashboard;
