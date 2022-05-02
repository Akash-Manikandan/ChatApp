//@ts-nocheck
import { Text, View } from "../Themed";
import styles from "./style";
import { Image, Pressable, Vibration } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = (props) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const ONE_SECOND_IN_MS = 1000;

  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: user.id,
      name: user.name,
      image: user.imageUri,
    });
  };

  return (
    <View>
      <Pressable
        onPress={onClick}
        onLongPress={() => Vibration.vibrate(ONE_SECOND_IN_MS)}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <View style={styles.container}>
          <View style={styles.lefContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <View style={styles.midContainer}>
              <Text style={styles.username}>{user.name}</Text>
              <Text numberOfLines={2} style={styles.lastMessage}>
                {chatRoom.lastMessage.content}
              </Text>
            </View>
          </View>
          <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ChatListItem;
