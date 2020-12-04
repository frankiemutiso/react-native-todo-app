import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => {
    return setText(textValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Item"
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addTodo(text)}>
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
