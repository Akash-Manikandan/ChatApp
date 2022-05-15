//@ts-nocheck
import { useRef } from "react";
import { FlatList } from "react-native";
import { View } from "../Themed";
import Bubble from "./Bubble";
export default function Message() {
  const flatListRef = useRef();

  const Chats = [
    {
      id: "m1",
      content: "How are you, Lukas!",
      createdAt: "2020-10-10T12:48:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m2",
      content: "I am good, good",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m3",
      content: "What about you?",
      createdAt: "2020-10-03T14:49:40.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m4",
      content: "Good as well, preparing for the stream now.",
      createdAt: "2020-10-03T14:50:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m5",
      content: "How is your life going?",
      createdAt: "2020-10-03T14:51:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m6",
      content:
        "It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?",
      createdAt: "2020-10-03T14:49:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m7",
      content:
        "Big Data is really interesting. Cannot wait to go through all the material.",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m8",
      content: "Hi",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m9",
      content:
        "Big Data is really interesting. Cannot wait to go through all the material.",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m10",
      content: "Hi",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
    {
      id: "m11",
      content:
        "Big Data is really interesting. Cannot wait to go through all the material.",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    },
    {
      id: "m12",
      content: "Hi",
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u2",
        name: "Lukas",
      },
    },
  ];
  return (
    <View style={{ flex: 1 }} darkColor={"#272336"}>
      <FlatList
        ref={flatListRef}
        data={Chats}
        renderItem={({ item }) => <Bubble props={item} />}
        keyExtractor={(item) => item.id}
        onLayout={() => flatListRef.current.scrollToEnd({ animated: false })}
      />
    </View>
  );
}
