//@ts-nocheck
import { StyleSheet, FlatList, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import { InputText } from "../components/SearchText";
import ChatListItem from "../components/ChatListItem";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function Chats({ navigation }: RootTabScreenProps<"TabOne">) {
  const colorScheme = useColorScheme();
  const navigator = useNavigation();
  const onClick = (item) => {
    navigator.navigate("Status", {
      id: item.users[1].id,
      name: item.users[1].name,
    });
  };
  const onClickAdd = () => {
    navigator.navigate("Status", {
      id: "u0",
      name: "Akash",
    });
  };
  const Add = () => {
    return (
      <Pressable
        onPress={onClickAdd}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <View style={styles.avatarContainer}>
          <Ionicons
            name="ios-add-circle-outline"
            size={50}
            color="#bfbfbf"
            style={styles.avatar}
          />
          <Text style={styles.avatarText}>Add</Text>
        </View>
      </Pressable>
    );
  };
  const Status = ({ props }) => {
    const item = props;
    return (
      <Pressable
        onPress={() => onClick(item)}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: item.users[1].imageUri }}
            style={styles.avatar}
          />
          <Text style={styles.avatarText}>{item.users[1].name}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <InputText />
      <View
        style={[
          styles.flatScroll,
          {
            borderBottomColor: Colors[colorScheme].tint,
          },
        ]}
      >
        <FlatList
          data={chatRooms}
          ListHeaderComponent={() => <Add />}
          renderItem={({ item }) => <Status props={item} />}
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
    padding: 3,
    flexDirection: "column",
    borderBottomWidth: 0.5,
  },
  avatarText: {
    padding: 5,
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },
});
