import { StyleSheet, View } from "react-native";
import React from "react";

const ShadowBox = ({ style, children }) => {
  return <View style={[styles.shadowCard, style]}>{children}</View>;
};

export default ShadowBox;

const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
  },
});
