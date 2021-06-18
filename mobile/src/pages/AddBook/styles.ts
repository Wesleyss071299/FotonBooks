import styled from 'styled-components/native'
import {CustomThemeProps} from '../../constants/theme';

export const Container = styled.ScrollView<CustomThemeProps>`
    background-color: ${(props) => props.theme.background};
    flex: 1;
`
export const ChooseImageBox = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 20px;
`
export const TitleBox = styled.View<CustomThemeProps>`
    color: ${(props) => props.theme.text};
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

export const InputBox = styled.View`
    flex: 1;
    align-items: center;
`

export const Label = styled.Text<CustomThemeProps>`
    color: ${(props) => props.theme.text};
    font-size: 16px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 8px;
    font-weight: bold;
`
