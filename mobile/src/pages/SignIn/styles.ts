import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";

export const Container = styled.ScrollView<CustomThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;
export const Title = styled.Text<CustomThemeProps>`
  font-size: 60px;
  margin-bottom: 30px;
  font-weight: bold;
  margin-top: 20px;
  align-self: center;
  color: ${(props) => props.theme.text};
`;
export const Label = styled.Text<CustomThemeProps>`
  color: #000;
  font-size: 20px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const InputBox = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
`;

export const SecondaryText = styled.Text<CustomThemeProps>`
  margin-top: 20px;
  align-self: flex-end;
  margin-right: 20px;
  font-size: 15px;
  color: ${(props) => props.theme.descriptionColor};
`;

export const DarkModeBox = styled.View`
  margin-top: 50px;
  align-self: flex-end;
  flex-direction: row;
`;
