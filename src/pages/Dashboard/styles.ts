import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

export const ContentWalletBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  margin: 0 10px;
  opacity: 0.4;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &.tag-actived {
    opacity: 1;
    border-bottom: 2px solid ${(props) => props.theme.colors.warning};
  }
`;

