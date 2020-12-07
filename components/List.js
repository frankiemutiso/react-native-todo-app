import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { globalStyles } from "../globalStyles";

const List = ({ item, deleteItem, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate("Details", { item })}
      >
        <Text style={globalStyles.text}>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  complete: {
    fontFamily: "ibm-regular",
    color: "lightgray"
  },
  incomplete: {
    fontFamily: "ibm-regular"
  },
  remove: {
    fontFamily: "ibm-regular"
  }
});
