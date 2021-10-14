import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView<CustomThemeProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  padding-top: ${Constants.statusBarHeight}px;
`;
export const InputView = styled.SafeAreaView`
  margin-top: 40px;
`;

export const WelcomeView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  align-self: flex-start;
  margin-left: 20px;
`;

export const WelcomeTitle = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  font-weight: 400;
`;
export const Name = styled.Text`
  color: #ff6978;
  font-size: 24px;
  font-weight: 400;
`;
