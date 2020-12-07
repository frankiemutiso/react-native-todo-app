import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const onTitleChange = (text) => {
    return setTitle(text);
  };

  const onDetailsChange = (text) => {
    return setDetails(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Task Title"
        onChangeText={onTitleChange}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={onDetailsChange}
        placeholder="Task Details"
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addTodo(title, details)}
      >
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: { margin: 5 },
  btn: {
    padding: 10,
    backgroundColor: "#f05454",
    borderRadius: 3
  },
  btnText: {
    fontFamily: "ibm-regular",
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  textInput: {
    padding: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5
  }
});
