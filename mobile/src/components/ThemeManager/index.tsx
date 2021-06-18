import React from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {CustomThemeProps, light, dark} from '../../constants/theme';
import {useAppSelector} from '../../store/hooks';
import {ThemeModeEnum} from '../../store/theme';

const StyledThemeContainer = styled.KeyboardAvoidingView<CustomThemeProps>`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

const {DARK, LIGHT} = ThemeModeEnum;

export const ThemeManager = ({children}: {children: React.ReactNode}) => {
    const themeMode = useAppSelector(state => state.theme.themeMode);
    const providedTheme = () => {
        if (themeMode === DARK) {
            return dark;
        }
        if (themeMode === LIGHT) {
            return light;
        }
  };
  return (
    <ThemeProvider theme={providedTheme}>
      <StyledThemeContainer>{children}</StyledThemeContainer>
    </ThemeProvider>
  );
}