import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;
