//@ts-nocheck
import { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  //VirtualizedList,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { View, Text } from "../components/Themed";
import * as Contacts from "expo-contacts";
import { useNavigation } from "@react-navigation/native";

export default function ContactsList() {
  const navigator = useNavigation();
  const [contacts, setContacts] = useState<Contacts[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);
  /*const getItem = (contacts, index) => {
    return contacts[index];
  };*/
  const ContactsApp = ({ props }) => {
    if (props.phoneNumbers !== undefined) {
      const phno = props.phoneNumbers;
      const onClick = () => {
        navigator.navigate("ChatRoom", {
          id: props.id,
          name: props.name.substring(0, 40),
        });
      };

      return (
        <Pressable
          onPress={onClick}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        >
          <View style={styles.container}>
            <View style={styles.lefContainer}>
              <Image
                source={{
                  uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000",
                }}
                style={styles.avatar}
              />
              <View style={styles.midContainer}>
                <Text numberOfLines={1} style={styles.username}>
                  {props.name.substring(0, 40)}
                </Text>
                <Text style={styles.lastMessage}>{phno[0].number}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      );
    } else {
      return null;
    }
  };
  if (Platform.OS === "web") {
    return (
      <View style={styles.webMainContainer}>
        <Text style={styles.webText}>Open in mobile to see Contacts</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.containerContacts}>
        {
          <FlatList
            data={contacts}
            renderItem={({ item }) => <ContactsApp props={item} />}
            keyExtractor={(item) => item.id}
            maxToRenderPerBatch={8}
          />
        }
        {/*<VirtualizedList
          data={contacts}
          initialNumToRender={7}
          renderItem={({ item }) => <ContactsApp props={item} />}
          keyExtractor={(item) => item.id}
          getItemCount={() => contacts.length}
          getItem={getItem}
        />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  containerContacts: {
    flex: 1,
  },
  lefContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
  lastMessage: {
    fontSize: 14,
    color: "grey",
    fontFamily: "Poppins-Regular",
  },
  time: {
    fontSize: 10,
    color: "grey",
    fontFamily: "Poppins-Regular",
  },
  webMainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  webText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
});
