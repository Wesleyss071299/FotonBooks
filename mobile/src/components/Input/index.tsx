import React from "react";
// Styled Components
import { TextInput, InputContainer } from "./styles";
import { StyleSheet } from "react-native";

interface Props {
  multline: boolean;
  placeholder?: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void | undefined;
  hasShadow?: boolean;
}

const Input: React.FC<Props> = ({
  children,
  multline,
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
  hasShadow = false,
}) => {
  return (
    <InputContainer isMultiline={multline} style={hasShadow && styles.shadow}>
      {children}
      <TextInput
        multiline={multline}
        numberOfLines={multline ? 10 : 1}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry ? true : false}
        onChangeText={onChangeText}
        textAlignVertical={multline ? "top" : "center"}
      />
    </InputContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#d4ad86",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 80,
  },
});

export default Input;
