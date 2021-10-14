import React from "react";
import { View, Text } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { ThemeModeEnum } from "../../store/theme";
import Modal from "react-native-modalbox";

const { LIGHT, DARK } = ThemeModeEnum;
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const ModalView: React.FC<Props> = ({ isOpen, setIsOpen, children, title }) => {
  const themeMode = useAppSelector((state) => state.theme.themeMode);
  const color = themeMode === DARK ? "#22211f" : "#FFF";
  const textColor = themeMode === DARK ? "#FFF" : "#000";

  return (
    <Modal
      swipeToClose={false}
      onClosed={() => setIsOpen(false)}
      backdrop={true}
      isOpen={isOpen}
      style={{ height: 300, width: 300, backgroundColor: color }}
      position={"center"}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {children}
        <Text
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </Modal>
  );
};

export default ModalView;
