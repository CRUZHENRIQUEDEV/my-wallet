import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

interface IHistoryFinanceCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;
    }
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
    cardColor, tagColor, title, subTitle, amount
}) => {
  return (
    <Container>
    </Container>
  );
};

export default HistoryFinanceCard;
