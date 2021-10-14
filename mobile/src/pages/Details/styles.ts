import styled from "styled-components/native";
import { CustomThemeProps } from "../../constants/theme";
import { Svg, Path } from "react-native-svg";
import Constants from "expo-constants";

export const Container = styled.View<CustomThemeProps>`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding-top: ${Constants.statusBarHeight}px;
`;

export const ImageCover = styled.Image`
  width: 140px;
  height: 200px;
  top: 28%;
`;

export const SVGVector = styled(Svg)`
  position: absolute;
`;

export const HeaderBox = styled.View`
  justify-content: flex-start;
  height: 35%;
  align-items: center;
`;

export const TitleBox = styled.View`
  margin-left: 20px;
  margin-top: 50px;
`;

export const Title = styled.Text<CustomThemeProps>`
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => props.theme.text};
`;

export const TitleBold = styled.Text<CustomThemeProps>`
  font-size: 24px;
  font-weight: 400;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Author = styled.Text`
  font-size: 16px;
  color: #ff6978;
`;

export const DescriptionBox = styled.ScrollView`
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const Description = styled.Text<CustomThemeProps>`
  font-size: 14px;
  color: ${(props) => props.theme.descriptionColor};
`;

export const BottomBox = styled.View`
  align-items: center;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;
