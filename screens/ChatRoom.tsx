//@ts-nocheck
import { StyleSheet } from "react-native";
import InputBox from "../components/InputBox";
import { View } from "../components/Themed";

export default function ChatRoom() {
  return (
    <View style={[styles.container]}>
      <InputBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
