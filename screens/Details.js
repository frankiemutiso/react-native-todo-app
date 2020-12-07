import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { globalStyles } from "../globalStyles";

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={globalStyles.text}>{item.title}</Text>
      <Text style={globalStyles.text}>{item.details}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
