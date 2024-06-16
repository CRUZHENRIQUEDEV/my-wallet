import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;
