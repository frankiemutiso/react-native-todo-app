import React, { useState, useEffect } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import uuid from "react-native-uuid";

import Header from "../components/Header";
import List from "../components/List";

import { globalStyles } from "../globalStyles";

const Home = ({ route, navigation }) => {
  const { title, details } = route.params;

  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      title: "Get the groceries",
      details: "Get vegetables, Onions and fruits."
    },
    {
      id: uuid.v4(),
      title: "Learn react native",
      details:
        "Learn how to use react native navigation to build professional apps."
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

  useEffect(() => {
    addTodo(title, details);
  }, [title, details]);

  return (
    <View>
      <Header />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("Add Todo", { addTodo })}
      >
        <Ionicons name="ios-add-circle-outline" size={50} color="#393e46" />
      </TouchableOpacity>

      {todos.length > 0 ? (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <List item={item} deleteItem={deleteItem} navigation={navigation} />
          )}
        />
      ) : (
        <View style={styles.noTodos}>
          <Text style={globalStyles.text}>
            You have no active todos. Add tasks.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  addBtn: { alignItems: "center", margin: 10 },
  noTodos: {
    alignItems: "center",
    marginTop: 15
  }
});
