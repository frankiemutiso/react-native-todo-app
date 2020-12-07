import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import { globalStyles } from "./globalStyles";

const getFonts = () =>
  Font.loadAsync({
    "ibm-bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    "ibm-medium": require("./assets/fonts/IBMPlexSans-Medium.ttf"),
    "ibm-regular": require("./assets/fonts/IBMPlexSans-Regular.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      title: "Get the groceries",
      details: "Get vegetables, Onions and fruits"
    },
    {
      id: uuid.v4(),
      title: "Learn react native",
      details:
        "Learn how to use react native navigation to build professional apps"
    }
  ]);

  const deleteItem = (id) => {
    return setTodos((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const addTodo = (title, details) => {
    if ((title === "") & (details === ""))
      return Alert.alert("OOPS!", "Cannot add empty todo");
    return setTodos((prevItems) => [
      { id: uuid.v4(), title, details },
      ...prevItems
    ]);
  };

  return fontsLoaded ? (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodo={addTodo} />
      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <List item={item} deleteItem={deleteItem} />
          )}
        />
      ) : (
        <View style={styles.noTodos}>
          <Text style={globalStyles.text}>
            You have no active todos. Add tasks.
          </Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40
  },
  noTodos: {
    alignItems: "center",
    marginTop: 15
  }
});
