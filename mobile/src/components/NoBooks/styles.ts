import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { CustomThemeProps } from "../../constants/theme";

const { height } = Dimensions.get("window");

export const Container = styled.View<CustomThemeProps>`
  height: ${height - 200}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  margin-bottom: 10px;
`;

export const Text = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  text-align: center;
  max-width: 60%;
`;
