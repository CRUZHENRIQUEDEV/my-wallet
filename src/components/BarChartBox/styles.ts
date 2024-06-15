import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;

  h2 {
    margin-bottom: 20px;
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;

  ul {
    list-style: none;
    padding-right: 10px;
    padding-left: 10px;
  }
`;
