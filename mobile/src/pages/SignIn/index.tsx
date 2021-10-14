import { Platform } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import {
  Container,
  Title,
  Label,
  DarkModeBox,
  SecondaryText,
  InputBox,
} from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
import DarkModeToogle from "../../components/DarkModeToogle";
import ModalView from "../../components/ModalView/Index";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "@react-navigation/stack";

// Redux Toolkit
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser } from "../../store/auth";
import { bookActions } from "../../store/books";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { errorMessage } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSignIn = async () => {
    const result = await dispatch(loginUser({ email, password }));

    if (result.type === "loginUser/rejected") {
      setIsOpen(true);
    }

    return () => {
      dispatch(bookActions.reset());
    };
  };
  return (
    <Container
      contentContainerStyle={{ paddingBottom: 50, alignItems: "center" }}
    >
      <DarkModeBox>
        <DarkModeToogle />
      </DarkModeBox>
      <Title>Login</Title>
      <Label>Email</Label>
      <InputBox behavior="padding" enabled>
        <Input
          value={email}
          onChangeText={(email) => setEmail(email)}
          multline={false}
        />
        <Label>Password</Label>
        <Input
          value={password}
          onChangeText={(password) => setPassword(password)}
          multline={false}
          secureTextEntry={true}
        />
        <PrimaryButton title="Sign In" onPress={handleSignIn} />
        <SecondaryText onPress={() => navigation.navigate("Register")}>
          Don`t have account? Press here
        </SecondaryText>
      </InputBox>

      {isOpen && (
        <ModalView isOpen={isOpen} setIsOpen={setIsOpen} title={errorMessage}>
          <Ionicons
            name="md-close-circle-sharp"
            size={80}
            color="red"
            onPress={() => setIsOpen(false)}
          />
        </ModalView>
      )}
    </Container>
  );
};

export default SignIn;
