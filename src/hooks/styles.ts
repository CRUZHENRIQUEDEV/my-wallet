import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 25px;
  display: flex;
  justify-content: flex-end;
`;
