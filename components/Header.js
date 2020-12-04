import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Whatchu Wanna do!? ✍</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#222831",
    alignItems: "center"
  },
  headerText: {
    fontFamily: "ibm-medium",
    color: "white",
    fontSize: 20
  }
});
