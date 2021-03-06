//@ts-nocheck
import { StyleSheet, TextInput, Platform,KeyboardAvoidingView } from "react-native";
import { useState } from "react";
//import EditScreenInfo from "../components/EditScreenInfo";
import { Feather } from "@expo/vector-icons";
import { View } from "./Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export function InputText() {
  const [text, onChangeText] = useState("");
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors[colorScheme].background,
          borderColor: Colors[colorScheme].light,
        },
      ]}
    >
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: Colors[colorScheme].background,
            borderColor: Colors[colorScheme].light,
          },
        ]}
      >
        <Feather name="search" size={24} color={Colors[colorScheme].tint} />
        <TextInput
          style={[
            styles.input,
            {
              color: Colors[colorScheme].text,
              fontFamily: "Poppins-Regular",
            },
            Platform.OS === "web" ? { outlineStyle: "none" } : null,
          ]}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Search Here"}
          placeholderTextColor={Colors[colorScheme].light}
        />
        <Feather name="mic" size={24} color={Colors[colorScheme].light} />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:10
  },
  mainContainer: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    borderRadius: 25,
    borderStyle: "solid",
    borderWidth: 0.5,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
});
