import React from "react";

import { Container, Image, Text } from "./styles";

export default function NoBooks() {
  return (
    <Container>
      <Image source={require("../../assets/denied.png")} />
      <Text>Você ainda não possui nenhum livro</Text>
    </Container>
  );
}
