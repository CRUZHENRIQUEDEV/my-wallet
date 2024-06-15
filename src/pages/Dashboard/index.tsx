import React, { useState, useMemo, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import {
  Container,
  FirstLine,
  Filters,
  FilterButton,
  SecondLine,
  ThirdLine,
  FourthLine,
} from "./styles";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import MessageBox from "../../components/MessageBox";
import PieChartComponent from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";

import WalletBox from "../../components/WalletBox";

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
      { value: "01", label: "Jan" },
      { value: "02", label: "Fev" },
      { value: "03", label: "Mar" },
      { value: "04", label: "Abr" },
      { value: "05", label: "Mai" },
      { value: "06", label: "Jun" },
      { value: "07", label: "Jul" },
      { value: "08", label: "Ago" },
      { value: "09", label: "Set" },
      { value: "10", label: "Out" },
      { value: "11", label: "Nov" },
      { value: "12", label: "Dez" },
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

  // Calculate the total of entries and exits and the balance
  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be a number.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be a number.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = total
      ? ((totalGains / total) * 100).toFixed(1)
      : "0.0";
    const percentExpenses = total
      ? ((totalExpenses / total) * 100).toFixed(1)
      : "0.0";

    return [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.replace(",", ".")),
        color: "#4caf50",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.replace(",", ".")),
        color: "#fa7922",
      },
    ];
  }, [totalGains, totalExpenses]);

  // Calculando dados para o HistoryBox
  const historyData = useMemo(() => {
    const dataArray = [];

    for (let month = 1; month <= 12; month++) {
      let amountEntry = 0;
      let amountOutput = 0;

      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth() + 1;
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === Number(yearSelected)) {
          amountEntry += Number(gain.amount);
        }
      });

      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth() + 1;
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === Number(yearSelected)) {
          amountOutput += Number(expense.amount);
        }
      });

      dataArray.push({
        month: months[month - 1].label,
        amountEntry,
        amountOutput,
      });
    }

    return dataArray;
  }, [yearSelected]);

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

  const relationExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");

      if (month === monthSelected && year === yearSelected) {
        if (expense.frequency === "recorrente") {
          amountRecurrent += Number(expense.amount);
        } else if (expense.frequency === "eventual") {
          amountEventual += Number(expense.amount);
        }
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: "#4E41F0",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: "#df9f4b",
      },
    ];
  }, [expenses, monthSelected, yearSelected]);

  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, "0");

      if (month === monthSelected && year === yearSelected) {
        if (gain.frequency === "recorrente") {
          amountRecurrent += Number(gain.amount);
        } else if (gain.frequency === "eventual") {
          amountEventual += Number(gain.amount);
        }
      }
    });

    const total = amountRecurrent + amountEventual;

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: Number(((amountRecurrent / total) * 100).toFixed(1)),
        color: "#4E41F0",
      },
      {
        name: "Eventuais",
        amount: amountEventual,
        percent: Number(((amountEventual / total) * 100).toFixed(1)),
        color: "#df9f4b",
      },
    ];
  }, [gains, monthSelected, yearSelected]);

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

      <FirstLine>
        <WalletBox
          title="Saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          color={totalBalance >= 0 ? "#2196f3" : "#f44336"} // Dinamizando a cor
        />
        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#4caf50"
        />
        <WalletBox
          title="Saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#fa7922"
        />
      </FirstLine>

      <SecondLine>
        <MessageBox
          title={totalBalance >= 0 ? "Muito bem!" : "Atenção!"}
          description={
            totalBalance >= 0
              ? "Sua carteira está positiva"
              : "Sua carteira está negativa"
          }
          footerText={
            totalBalance >= 0
              ? "Continue assim. Considere investir o seu saldo."
              : "Cuidado com os gastos excessivos."
          }
          icon={totalBalance >= 0 ? happyImg : sadImg}
        />
        <PieChartComponent data={relationExpensesVersusGains} />
      </SecondLine>

      <ThirdLine style={{ marginTop: 20 }}>
        <HistoryBox
          data={historyData}
          lineColorAmountEntry="#4caf50"
          lineColorAmountOutput="#fa7922"
        />
      </ThirdLine>

      <FourthLine>
        <BarChartBox
          title="Saídas"
          data={relationExpensesRecurrentVersusEventual}
        />
        <BarChartBox
          title="Entradas"
          data={relationGainsRecurrentVersusEventual}
        />
      </FourthLine>
    </Container>
  );
};

export default Dashboard;
