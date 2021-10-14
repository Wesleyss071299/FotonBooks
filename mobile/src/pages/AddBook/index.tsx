import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mime from "mime";
import api from "../../services/api";
// Components
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import SuccessfulBox from "../../components/SuccessfulBox";
import ModalView from "../../components/ModalView/Index";
// Styled Components
import {
  Container,
  Label,
  ChooseImageBox,
  InputBox,
  TitleBox,
  Title,
} from "./styles";
// Redux
import { fetchBookData } from "../../store/actions/books";
import { useAppDispatch } from "../../store/hooks";

interface ImageFile {
  uri: string;
}

const AddBook: React.FC = () => {
  const dispatch = useAppDispatch();

  const [image, setImage] = useState<ImageFile>();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({
        uri: result.uri,
      });
    }
  };

  const handleSubmit = async () => {
    setIsSuccess(false);

    if (!name || !author || !description || !image) {
      setIsOpen(true);
      return;
    }

    const data = new FormData();
    data.append("title", name);
    data.append("author", author);
    data.append("description", description);

    const newImageUri = "file:///" + image?.uri.split("file:/").join("");
    const imageData = JSON.parse(
      JSON.stringify({
        uri: newImageUri,
        type: mime.getType(newImageUri),
        name: image?.uri.split("/").pop(),
      })
    );

    data.append("file", imageData);
    const token = await AsyncStorage.getItem("@token");
    try {
      await api.post("books", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      await dispatch(fetchBookData());
      setIsSuccess(true);
      setIsOpen(true);
      setAuthor("");
      setName("");
      setDescription("");
      setImage(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 70 }}
    >
      <Title>Add a new book</Title>
      <ChooseImageBox>
        <TitleBox>
          <Label>Choose cover</Label>
          {image && <SuccessfulBox />}
        </TitleBox>
        <SecondaryButton onPress={pickImage}>
          <FontAwesome name="photo" size={24} color="white" />
        </SecondaryButton>
      </ChooseImageBox>
      <InputBox>
        <Label>Name</Label>
        <Input
          multline={false}
          value={name}
          onChangeText={(name) => setName(name)}
          hasShadow
        />

        <Label>Author</Label>
        <Input
          multline={false}
          value={author}
          onChangeText={(author) => setAuthor(author)}
          hasShadow
        />

        <Label>Description</Label>
        <Input
          multline={true}
          value={description}
          onChangeText={(description) => setDescription(description)}
          hasShadow
        />
        <PrimaryButton title="Add new book" onPress={handleSubmit} />
      </InputBox>
      {isOpen && (
        <ModalView
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={
            isSuccess
              ? "Cadastrado com Sucesso"
              : "Por favor, Preencha todos os campos"
          }
        >
          {isSuccess ? (
            <Ionicons
              name="checkmark-circle-sharp"
              size={80}
              color="green"
              onPress={() => setIsOpen(false)}
            />
          ) : (
            <Ionicons
              name="md-close-circle-sharp"
              size={80}
              color="red"
              onPress={() => setIsOpen(false)}
            />
          )}
        </ModalView>
      )}
    </Container>
  );
};

export default AddBook;
