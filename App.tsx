import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { HomeScreen } from "./components/HomeScreen";
import { ProfileScreen } from "./components/ProfileScreen";

export type AppStackParamList = {
  Home: undefined;
  Profile: {
    name: string;
    email: string;
  };
};

const Stack = createStackNavigator<AppStackParamList>();

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <NavigationContainer>
      <Wrapper>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </Wrapper>
    </NavigationContainer>
  );
}
