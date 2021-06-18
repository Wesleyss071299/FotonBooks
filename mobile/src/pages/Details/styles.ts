import styled from 'styled-components/native'
import { CustomThemeProps } from '../../constants/theme'

export const Container = styled.View<CustomThemeProps>`
    flex: 1;
    background-color: ${props => props.theme.background};
`

export const Image = styled.Image`
    width: 150px;
    height: 232px;
    position: absolute;
    margin-top: 100px;
`

export const HeaderBox = styled.View`
    
    justify-content: flex-start;
    height: 300px;
    align-items: center;
`

export const TitleBox = styled.View`
    margin-left: 20px;
    margin-top: 30px;
`
export const Title = styled.Text<CustomThemeProps>`
    font-size: 24px;
    font-weight: 400;
    color: ${props => props.theme.text};
`
export const Author = styled.Text`
    font-size: 16px;
    color: #FF6978;
`

export const DescriptionBox = styled.ScrollView`
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
`

export const Description = styled.Text<CustomThemeProps>`
    font-size: 14px;
    color: ${props => props.theme.descriptionColor};
`
export const BottomBox = styled.View`
    align-items: center;
    margin-bottom: 30px;
`