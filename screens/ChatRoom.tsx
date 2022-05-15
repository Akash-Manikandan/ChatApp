//@ts-nocheck
import { StyleSheet } from "react-native";
import InputBox from "../components/InputBox";
import { View } from "../components/Themed";
import Message from "../components/Message";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
export default function ChatRoom() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Message />
      <View
        style={[
          styles.inputContainer,
          {
            borderTopColor: Colors[colorScheme].tint,
          },
        ]}
      >
        <InputBox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    borderTopWidth: 0.5,
  },
});
