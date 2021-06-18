import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import {CustomThemeProps} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;

interface InputContainerProps extends CustomThemeProps{
    isMultiline: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
    flex-direction: row;
    height: ${({ isMultiline }) => ( isMultiline ? '190px' : '50px')};
    width: ${windowWidth - 40}px;
    border-radius: 10px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colorInput};
  
    align-items: ${({ isMultiline }) => ( isMultiline ? 'flex-start' : 'center')};;
`;

export const TextInput = styled.TextInput<CustomThemeProps>`
    color: ${(props) => props.theme.text};
    flex: 1;
    margin-left: 10px;
`