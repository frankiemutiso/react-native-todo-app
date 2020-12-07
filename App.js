import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Details from "./screens/Details";
import AddTodo from "./screens/AddTodo";

const getFonts = () =>
  Font.loadAsync({
    "ibm-bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    "ibm-medium": require("./assets/fonts/IBMPlexSans-Medium.ttf"),
    "ibm-regular": require("./assets/fonts/IBMPlexSans-Regular.ttf")
  });

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Add Todo" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40
  }
});
