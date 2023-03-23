import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;

const styles = StyleSheet.create({});