import React from "react";
import { Switch } from "react-native";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { ThemeModeEnum, setThemeMode } from "../../store/theme";
import { authActions } from "../../store/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  HeaderBox,
  IconBox,
  EmailText,
  OptionBox,
  ItemOption,
  ItemTitle,
  Separator,
  LogoutBox,
} from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
const { LIGHT, DARK } = ThemeModeEnum;

const Profile = () => {
  const themeMode = useAppSelector((state) => state.theme.themeMode);
  const userEmail = useAppSelector((state) => state.auth.user.email);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@token");
    dispatch(authActions.logout());
  };

  return (
    <Container>
      <HeaderBox>
        <IconBox></IconBox>
        <EmailText>{userEmail}</EmailText>
      </HeaderBox>

      <OptionBox>
        <ItemOption>
          <ItemTitle>Dark mode</ItemTitle>
          <Switch
            value={themeMode === DARK}
            onValueChange={(value) => {
              dispatch(setThemeMode(value ? DARK : LIGHT));
            }}
          />
        </ItemOption>
        <Separator />
        <ItemOption>
          <ItemTitle>Account</ItemTitle>
        </ItemOption>
        <Separator />
        <ItemOption>
          <ItemTitle>Notifications</ItemTitle>
        </ItemOption>
        <Separator />
        <ItemOption>
          <ItemTitle>Privacy and Security</ItemTitle>
        </ItemOption>
        <Separator />
        <ItemOption>
          <ItemTitle>Help and Support</ItemTitle>
        </ItemOption>
      </OptionBox>

      <LogoutBox>
        <PrimaryButton title="Log out" onPress={handleLogout} />
      </LogoutBox>
    </Container>
  );
};

export default Profile;
