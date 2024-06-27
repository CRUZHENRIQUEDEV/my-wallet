// src/components/ExchangeChartBox/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;

  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 20px;
  }
`;
