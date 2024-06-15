import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px;

  &:hover {
    opacity: 0.7s;
    transform: scale(1.03);
  }
`;

export const SideLeft = styled.div`
  padding: 30px 0;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 15px;
  padding: 5px 10px;
`;
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  font-size: 14px;

  margin-bottom: 7px;

  > div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 14;
    line-height: 40px;
    text-align: center;
    margin-right: 7px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
