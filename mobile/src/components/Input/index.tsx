import React from 'react'
// Styled Components
import { TextInput, InputContainer } from './styles'

interface Props {
    multline: boolean;
    placeholder?: string
    value: string 
    secureTextEntry?: boolean
    onChangeText: (text: string) => void | undefined
}


const Input: React.FC<Props> = ({ children, multline, placeholder, value, secureTextEntry, onChangeText }) => {
    return(
        <InputContainer isMultiline={multline}>
            { children }
            <TextInput
                multiline={multline}
                numberOfLines={multline ? 10 : 1}
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry ? true : false}
                onChangeText={onChangeText}
                textAlignVertical={multline ? 'top' : 'center'}
            />
        </InputContainer>
    )
}

export default Input;
