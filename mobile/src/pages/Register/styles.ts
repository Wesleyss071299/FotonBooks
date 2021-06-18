import styled from 'styled-components/native'
import {CustomThemeProps} from '../../constants/theme';

export const Container = styled.KeyboardAvoidingView<CustomThemeProps>`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.background};
`
export const Title = styled.Text<CustomThemeProps>`
    font-size: 60px;
    margin-bottom: 30px;
    font-weight: bold;
    margin-top: 20px;
    color: ${props => props.theme.text};
`
export const Label = styled.Text<CustomThemeProps>`
    color: #000;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 8px;
    font-weight: bold;
    color: ${props => props.theme.text};
`

export const BackBox = styled.View`
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 40px;
`