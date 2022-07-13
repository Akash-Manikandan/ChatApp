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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import axios from "axios";

function SignIn({ navigation }) {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState({});
  const [disable, setDisable] = useState(false);
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  };
  async function auth() {
    setDisable(true);
    await axios
      .post(
        "https://first-nest.vercel.app/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          headers,
        }
      )
      .then(function (response) {
        console.log(response.data);
        setValue(response.data);
        setDisable(false);
        navigation.replace("Root");
      })
      .catch(function (error) {
        console.log(error);
        setDisable(false);
      });
  }
  function submit() {
    console.log(email + " " + password);
    setEmail("");
    setPassword("");
    //navigation.navigate("Root");
    navigation.replace("Root");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.outer}>
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
          <Pressable onPress={auth} disabled={disable}>
            <Text
              style={[
                {
                  backgroundColor: !disable
                    ? Colors[colorScheme].tint
                    : Colors[colorScheme].backgroundInput,
                },
                styles.buttonText,
              ]}
            >
              SignIn
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
    borderRadius: 15,
    fontFamily: "Poppins-Regular",
  },
  buttonContainer: {
    padding: 20,
  },
  buttonText: {
    padding: 15,
    textAlign: "center",
    borderRadius: 15,
    fontFamily: "Poppins-Regular",
  },
});

export default SignIn;
