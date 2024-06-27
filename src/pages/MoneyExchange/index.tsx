import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import ExchangeChartBox from "../../components/ExchangeChartBox";

// Função para buscar dados de câmbio de várias moedas
const fetchExchangeRates = async (symbols: string) => {
  const response = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${symbols}`
  );
  const data = await response.json();
  return data;
};

const MoneyExchange: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currencyData, setCurrencyData] = useState<any>([]);

  useEffect(() => {
    const symbols = "USD-BRL,EUR-BRL,GBP-BRL"; // Adicione mais pares de moedas conforme necessário

    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates(symbols);
        setExchangeRates(data);

        // Organizar os dados em um formato adequado para gráficos
        const formattedData = Object.keys(data).map((key) => {
          const { code, codein, bid, create_date } = data[key];
          return {
            currency: `${code}/${codein}`,
            date: new Date(create_date).toLocaleDateString("pt-BR"),
            rate: parseFloat(bid),
          };
        });

        setCurrencyData(formattedData);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (!exchangeRates) {
    return <Container>Error fetching data</Container>;
  }

  return (
    <Container>
      <h1>Money Exchange Rates</h1>
      <ExchangeChartBox
        data={currencyData}
        lineColor="#8884d8"
        currency="BRL"
      />
    </Container>
  );
};

export default MoneyExchange;
