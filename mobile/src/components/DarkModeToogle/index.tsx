import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ThemeModeEnum, setThemeMode } from "../../store/theme";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "react-native";

const { LIGHT, DARK } = ThemeModeEnum;

const DarkModeToogle = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.themeMode);
  return (
    <>
      {themeMode === LIGHT ? (
        <Ionicons name="md-sunny-sharp" size={24} color="#FDB813" />
      ) : (
        <Ionicons name="md-moon" size={24} color="#FFF" />
      )}

      <Switch
        value={themeMode === DARK}
        onValueChange={(value) => {
          dispatch(setThemeMode(value ? DARK : LIGHT));
        }}
      />
    </>
  );
};

export default DarkModeToogle;
