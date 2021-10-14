import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const Container = styled.ScrollView<CustomThemeProps>`
  background-color: ${(props) => props.theme.background};
  padding-top: ${Constants.statusBarHeight + 30}px;
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: red;
  margin-left: 20px;
`;

export const ChooseImageBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
`;
export const TitleBox = styled.View<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const InputBox = styled.View`
  flex: 1;
  align-items: center;
`;

export const Label = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 8px;
  font-weight: bold;
`;
