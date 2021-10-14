import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";

export const Container = styled.TouchableOpacity`
  align-items: center;
  width: 100px;
  height: 200px;
  margin-top: 12px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 12px;
`;

export const ImageBox = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

export const TitleBox = styled.View`
  width: 100%;
  flex: 1;
`;

export const Title = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  font-weight: 700;
  font-size: 12px;
  margin-top: 5px;
  align-self: flex-start;
  font-weight: bold;
  line-height: 15px;
`;

export const Author = styled.Text<CustomThemeProps>`
  color: ${(props) => props.theme.text};
  font-size: 10px;
  font-weight: 900;
  align-self: flex-start;
  font-weight: bold;
  line-height: 12px;
`;
