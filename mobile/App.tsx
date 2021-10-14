import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Routes from "./src/routes/index";
import { ThemeManager } from "./src/components/ThemeManager";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeManager>
          <Routes />
        </ThemeManager>
      </Provider>
    </View>
  );
}
