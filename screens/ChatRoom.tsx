//@ts-nocheck
import { StyleSheet } from "react-native";
import InputBox from "../components/InputBox";
import { View } from "../components/Themed";
import Message from "../components/Message";
import useColorScheme from "../hooks/useColorScheme";

export default function ChatRoom() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Message />
      <View
        style={[
          styles.inputContainer,
          {
            borderTopColor: (colorScheme==='light')?'#D0ECE8':'#9f85fe'
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
