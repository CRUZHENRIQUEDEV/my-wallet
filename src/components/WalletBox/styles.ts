import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  width: 31.3%;
  height: 150px;

  margin: 10px 0;

  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};

  border-radius: 5px;
  padding: 10px 20px;

  position: relative;
  overflow: hidden;

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 10px;
    position: absolute;
    bottom: 10px;
  }

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 70%;
  font-size: 25px;
`;
