import styled from "styled-components";

interface IContainerProps {
  lineColor: string;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const TitleContainer = styled.h4<IContainerProps>`
  //injeta no container a interface IContainerProps
  > h1 {
    color: ${(props) => props.theme.colors.white};
    &::after {
      content: "";
      display: block;
      width: 50px;
      border-bottom: 8px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
