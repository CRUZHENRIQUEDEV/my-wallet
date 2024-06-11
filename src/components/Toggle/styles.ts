import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  margin: 0 5px;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.white,
    offColor: theme.colors.black,
    onHandleColor: theme.colors.white,
    offHandleColor: theme.colors.gray,
  })
)`
  margin: 0 10px;
`;
