import React from "react";
import { Container, OptionItem, Title } from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const OptionBox: React.FC = () => {
  return (
    <Container>
      <OptionItem>
        <Feather name="book-open" size={30} color="#CFCBD2" />
        <Title>Read</Title>
      </OptionItem>
      <OptionItem>
        <FontAwesome5 name="headphones" size={30} color="#CFCBD2" />
        <Title>Listen</Title>
      </OptionItem>
      <OptionItem>
        <Feather name="share" size={30} color="#CFCBD2" />
        <Title>Share</Title>
      </OptionItem>
    </Container>
  );
};

export default OptionBox;
