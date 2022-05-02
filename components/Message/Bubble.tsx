import { View, Text } from "../Themed";
import moment from "moment";
import { Platform, Pressable, StyleSheet, Vibration } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import * as Clipboard from "expo-clipboard";

const Bubble = ({ props }: any) => {
  const message = props;
  const colorScheme = useColorScheme();
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  const copyToClipboard = (str: string) => {
    if (Platform.OS !== "web") {
      Clipboard.setString(str);
      Vibration.vibrate(500);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={() => copyToClipboard(message.content)}
        delayLongPress={1000}
      >
        <View
          style={[
            styles.messageBox,
            {
              marginLeft: isMyMessage() ? 70 : 0,
              marginRight: isMyMessage() ? 0 : 70,
            },
          ]}
          lightColor={isMyMessage() ? "#D0ECE8" : "#E4E4E4"}
          darkColor={isMyMessage() ? "#9f85fe" : "#383152"}
        >
          {!isMyMessage() && (
            <Text style={styles.name}>{message.user.name}</Text>
          )}

          <Text
            style={[
              styles.message,
              isMyMessage() && colorScheme === "light" && { color: "#007665" },
              isMyMessage() && colorScheme === "dark" && { color: "black" },
            ]}
          >
            {message.content}
          </Text>
          <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    marginRight: 50,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: "#f46a4e",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  message: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  time: {
    alignSelf: "flex-end",
    color: "grey",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
});

export default Bubble;