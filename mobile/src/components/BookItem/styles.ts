import styled from 'styled-components/native'
import {CustomThemeProps} from '../../constants/theme';

export const Container = styled.TouchableOpacity`
    align-items: center;
    width: 100px;
    height: 200px;
    margin-right: 20px;
    margin-top: 12px;
`

export const ImageBox = styled.View`

    justify-content: flex-start;
    align-items: center;
`
export const TitleBox = styled.View`
flex: 1;
`
export const Title = styled.Text<CustomThemeProps>`
    color: ${(props) => props.theme.text};
    font-size: 14px;
    align-self: flex-start;
    font-weight: bold;
`
export const Author = styled.Text<CustomThemeProps>`
    color: ${(props) => props.theme.text};
    font-size: 12px;
    align-self: flex-start;
    font-weight: bold;
`