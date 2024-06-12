//HistoryFinanceCard styles.ts
import styled from "styled-components";
interface ITagProps {
  color: string;
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};

  list-style: nome;
  border-radius: 5px;

  margin: 10px;
  padding: 15px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7s;
    transform: scale(1.03);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;

    > span {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const Tag = styled.div<ITagProps>`
  width: 10px;
  height: 60%;

  background-color: ${(props) => props.color};

  position: absolute;
  left: 5px;
`;
