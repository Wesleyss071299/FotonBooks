import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View<CustomThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 30px 0;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const HeaderBox = styled.View`
  align-items: center;
`;

export const EmailText = styled.Text<CustomThemeProps>`
  font-size: 15px;
  margin-top: 15px;
  color: ${(props) => props.theme.text};
`;

export const IconBox = styled.View<CustomThemeProps>`
  width: 70px;
  height: 70px;
  background-color: ${(props) => props.theme.text};
  border-radius: 50px;
  margin-top: 20px;
`;

export const OptionBox = styled.View`
  flex: 1;
  margin-top: 30px;
  flex-direction: column;
`;
export const ItemOption = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
`;

export const Separator = styled.View<CustomThemeProps>`
  width: ${windowWidth - 30}px;
  border-bottom-color: ${(props) => props.theme.text};
  border-bottom-width: 1px;
  align-self: center;
`;

export const ItemTitle = styled.Text<CustomThemeProps>`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const LogoutBox = styled.View`
  align-items: center;
`;
