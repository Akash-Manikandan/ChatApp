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
import { ColorSchemeName, Pressable } from "react-native";

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
  //const colorScheme = useColorScheme();
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
        name="Camera"
        component={TabTwoScreen}
        options={{
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" size={24} color={color} />
          ),
        }}
      />
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
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call-outline" size={24} color={color} />
          ),
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
