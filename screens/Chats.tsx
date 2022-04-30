import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import { InputText } from "../components/SearchText";
import ChatListItem from "../components/ChatListItem";

export default function Chats({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  return (
    <View style={styles.container}>
      <InputText />
      <FlatList 
      data={chatRooms}
      renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
