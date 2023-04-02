import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import MyClasses from "../components/MyClasses/Index";

// Screen with list of classes selected from MonthClasses and DayClasses screens
const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <MyClasses navigation={navigation} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
