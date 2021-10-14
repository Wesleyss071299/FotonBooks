import React from "react";
import { Image } from "react-native";
// Styled Components
import { Container, ImageBox, Title, Author, TitleBox } from "./styles";
import { API_IP } from "@env";

interface Props {
  title: string;
  author: string;
  url: string;
  onPress: () => void;
}

const BookItem: React.FC<Props> = ({ title, author, url, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ImageBox>
        {url ? (
          <Image
            source={{ uri: `http://${API_IP}/uploads/${url}` }}
            style={{ width: 100, height: 160 }}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../../assets/noImage.png")}
            style={{ width: 100, height: 160 }}
            resizeMode="cover"
          />
        )}
      </ImageBox>
      <TitleBox>
        <Title>{title.split(":")[0]}</Title>
        <Author>by {author}</Author>
      </TitleBox>
    </Container>
  );
};

export default BookItem;
