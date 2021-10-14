import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { CustomThemeProps } from "../../constants/theme";

export const Container = styled.View<CustomThemeProps>`
  background-color: ${(props) => props.theme.colorInput};
  width: 100%;
  height: 50px;
  border-radius: 2px;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  flex-direction: row;
  justify-content: space-around;
`;

export const OptionItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  margin-left: 9px;
`;
