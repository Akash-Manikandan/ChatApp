//@ts-nocheck
import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatRoom from "../screens/ChatRoom";
import NotFoundScreen from "../screens/NotFoundScreen";
import Chats from "../screens/Chats";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { View } from "../components/Themed";
import CameraScreen from "../screens/CameraScreen";
import ContactsList from "../screens/ContactsList";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={({ route }) => ({
            title: route.params.name,
            animation: "slide_from_right",
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
              fontSize: 15,
            },
            headerRight: () => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 100,
                  }}
                >
                  <Ionicons
                    name="call-outline"
                    size={24}
                    color={Colors[colorScheme].text}
                  />
                  <Feather
                    name="video"
                    size={24}
                    color={Colors[colorScheme].text}
                  />
                </View>
              );
            },
            headerStyle: {
              backgroundColor: Colors[colorScheme].background,
            },
            headerShadowVisible: true,
            headerLeft: () => {
              if (route.params.image) {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                        paddingRight: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Root")}
                        //style={{ padding: 8, paddingRight: 10 }}
                      >
                        <Ionicons
                          name="ios-arrow-back-sharp"
                          size={25}
                          color={Colors[colorScheme].text}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                        paddingRight: 10,
                      }}
                    >
                      <Image
                        source={{ uri: route.params.image }}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 50,
                        }}
                      />
                    </View>
                  </View>
                );
              } else {
                return null;
              }
            },
          })}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={TabTwoScreen}
          options={{
            animation: "fade_from_bottom",
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Status"
          component={ChatRoom}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
            },
            animation: "slide_from_bottom",
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          shadowOpacity: 0,
          elevation: 0,
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontFamily: "Poppins-Regular",
        },
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
        },
      }}
    >
      <BottomTab.Screen
        name="Chats"
        component={Chats}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Feather
                name="edit"
                size={24}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Contacts"
        component={ContactsList}
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabTwoScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
