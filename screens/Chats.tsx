//@ts-nocheck
import { StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import { InputText } from "../components/SearchText";
import ChatListItem from "../components/ChatListItem";
import { useNavigation } from "@react-navigation/native";

export default function Chats({ navigation }: RootTabScreenProps<"TabOne">) {
  const navigator = useNavigation();
  const onClick = (item) => {
    navigator.navigate("Status", {
      id: item.users[1].id,
      name: item.users[1].name,
    });
  };
  return (
    <View style={styles.container}>
      <InputText />
      <View style={styles.flatScroll}>
        {/*<Ionicons name="ios-add-circle-outline" size={24} color="black" />*/}
        <FlatList
          data={chatRooms}
          ListHeaderComponent={() => {
            return (
              <View style={styles.avatarContainer}>
                <Ionicons
                  name="ios-add-circle-outline"
                  size={50}
                  color="#bfbfbf"
                  style={styles.avatar}
                />
                <Text style={styles.avatarText}>
                  Add
                </Text>
              </View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => onClick(item)}>
                <View style={styles.avatarContainer}>
                  <Image
                    source={{ uri: item.users[1].imageUri }}
                    style={styles.avatar}
                  />
                  <Text style={styles.avatarText}>{item.users[1].name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  flatScroll: {
    padding: 5,
    flexDirection: "column",
  },
  avatarText: {
    padding: 5,
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
});
