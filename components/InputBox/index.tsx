//@ts-nocheck
import { useState } from "react";
import { View } from "../Themed";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { TextInput, KeyboardAvoidingView, Platform } from "react-native";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const colorScheme = useColorScheme();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: Colors[colorScheme].backgroundInput,
            },
          ]}
        >
          <TextInput
            placeholder={"Send Message"}
            placeholderTextColor={Colors[colorScheme].text}
            style={[
              styles.textInput,
              Platform.OS === "web" && { outlineWidth: 0 },
              { color: "#007665" },
            ]}
            multiline={true}
            value={message}
            onChangeText={setMessage}
            placeholderTextColor={Colors[colorScheme].light}
            selectionColor={"#f46a4e"}
          />
          <View
            lightColor="#f6f6f6"
            darkColor="#202c33"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Feather name="send" size={22} color="grey" style={styles.icon} />
            {!message && (
              <Feather
                name="camera"
                size={22}
                color="grey"
                style={styles.icon}
              />
            )}
          </View>
        </View>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: Colors[colorScheme].chatTheme },
          ]}
        >
          <Feather
            name="mic"
            size={22}
            color={Colors[colorScheme].background}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputBox;
