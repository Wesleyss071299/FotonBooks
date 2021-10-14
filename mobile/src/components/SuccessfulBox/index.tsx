import React from "react";
import { Container, Title } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const SuccessfulBox = () => {
  return (
    <Container>
      <Title>Selected</Title>
      <AntDesign name="checkcircleo" size={24} color="green" />
    </Container>
  );
};

export default SuccessfulBox;
