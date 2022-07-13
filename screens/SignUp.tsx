//@ts-nocheck
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { View, Text } from "../components/Themed";
import { Fumi } from "react-native-textinput-effects";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

function SignUp() {
  const colorScheme = useColorScheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submit() {
    console.log(name + " " + email + " " + password);
    setEmail("");
    setPassword("");
    setName("");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.outer}>
          <KeyboardAvoidingView>
            <View style={styles.inner}>
              <Fumi
                label={"Name"}
                iconClass={AntDesign}
                iconName={"user"}
                iconColor={Colors[colorScheme].tint}
                iconSize={18}
                iconWidth={45}
                inputPadding={20}
                onChangeText={setName}
                value={name}
                style={[
                  styles.input,
                  {
                    borderColor: Colors[colorScheme].text,
                    backgroundColor: Colors[colorScheme].background,
                  },
                ]}
                autoComplete="name"
              />
            </View>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <View style={styles.inner}>
              <Fumi
                label={"E-mail"}
                iconClass={MaterialCommunityIcons}
                iconName={"email"}
                iconColor={Colors[colorScheme].tint}
                iconSize={18}
                iconWidth={45}
                inputPadding={20}
                onChangeText={setEmail}
                value={email}
                style={[
                  styles.input,
                  {
                    borderColor: Colors[colorScheme].text,
                    backgroundColor: Colors[colorScheme].background,
                  },
                ]}
                autoComplete="email"
              />
            </View>
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <View style={styles.inner}>
              <Fumi
                label={"Password"}
                iconClass={MaterialCommunityIcons}
                iconName={"onepassword"}
                iconColor={"#f95a25"}
                iconSize={18}
                iconWidth={45}
                inputPadding={20}
                iconColor={Colors[colorScheme].tint}
                onChangeText={setPassword}
                value={password}
                style={[
                  styles.input,
                  {
                    borderColor: Colors[colorScheme].text,
                    backgroundColor: Colors[colorScheme].background,
                  },
                ]}
                autoComplete="password"
                secureTextEntry={true}
              />
            </View>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable onPress={submit} style={styles.button}>
            <Text
              style={[
                { backgroundColor: Colors[colorScheme].tint },
                styles.buttonText,
              ]}
            >
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  outer: {
    flexDirection: "column",
    paddingBottom: 50,
  },
  inner: {
    padding: 15,
    height: 100,
  },
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 0.4,
  },
  buttonContainer: {
    padding: 20,
  },
  buttonText: {
    padding: 15,
    textAlign: "center",
    borderRadius: 10,
  },
});
export default SignUp;
