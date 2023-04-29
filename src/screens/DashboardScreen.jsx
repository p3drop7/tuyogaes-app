import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import MyClasses from "../components/MyClasses/Index";
import COLORS from "../constants/Colors";

// Screen with list of classes selected from MonthClasses and DayClasses screens
const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay navigation={navigation}/>
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
    backgroundColor: COLORS.lightGreen
  },
});
