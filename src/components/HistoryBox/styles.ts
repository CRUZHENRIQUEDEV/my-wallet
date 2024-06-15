import Styled from "styled-components";

export const Container = Styled.div`
  width: 100%;
  height: 240px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;

  &:hover {
    opacity: 0.7s;
    transform: scale(1.03);
`;

export const FirstLine = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SecondLine = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
