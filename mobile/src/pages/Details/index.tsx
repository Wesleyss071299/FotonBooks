import React from "react";
import {
  Container,
  ImageCover,
  HeaderBox,
  TitleBox,
  Title,
  Author,
  DescriptionBox,
  Description,
  BottomBox,
  TitleBold,
  SVGVector,
} from "./styles";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Book } from "../../interfaces/Book";
import { Path } from "react-native-svg";
import OptionBox from "../../components/OptionBox";
import { API_IP } from "@env";

const Details: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routeParams = route.params as Book;
  return (
    <Container>
      <HeaderBox>
        <SVGVector
          width="100%"
          height="90%"
          viewBox="0 0 375 282"
          fill="none"
          preserveAspectRatio="none"
          strokeWidth="0.15"
          stroke="rgb(0,0,0)"
        >
          <Path
            d="M-1 0H375V182C375 237.228 330.228 282 275 282H-1V0Z"
            fill="#FFF6E5"
          />
        </SVGVector>
        <Image
          source={require("./../../assets/Oval1.png")}
          height={100}
          width={100}
          style={{ position: "absolute", top: 0, right: 0 }}
        />
        <Image
          source={require("./../../assets/Oval2.png")}
          height={100}
          width={100}
          style={{ position: "absolute", top: 115, left: 80 }}
        />
        <Image
          source={require("./../../assets/Oval3.png")}
          height={100}
          width={100}
          style={{ position: "absolute", top: 125, left: 47 }}
        />
        <Image
          source={require("./../../assets/Oval4.png")}
          height={100}
          width={100}
          style={{ position: "absolute", top: 86, right: 103 }}
        />
        <Image
          source={require("./../../assets/Oval5.png")}
          height={100}
          width={100}
          style={{ position: "absolute", top: "60%", right: 90 }}
        />

        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={{
            marginTop: "5%",
            position: "absolute",
            alignSelf: "flex-start",
            marginLeft: 20,
            padding: 10,
          }}
        />
        {routeParams.cover ? (
          <ImageCover
            source={{
              uri: `http://${API_IP}/uploads/${routeParams.cover}`,
            }}
          />
        ) : (
          <ImageCover source={require("../../assets/noImage.png")} />
        )}
      </HeaderBox>
      <TitleBox>
        <Title>
          <TitleBold>{routeParams.title.split(":")[0]}</TitleBold>
          {routeParams.title.includes(":") && ":"}
          {routeParams.title.split(":")[1]}
        </Title>
        <Author>{routeParams.author}</Author>
      </TitleBox>
      <DescriptionBox>
        <Description>{routeParams.description}</Description>
      </DescriptionBox>
      <BottomBox>
        <OptionBox />
      </BottomBox>
    </Container>
  );
};

export default Details;
