import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MonthClassesScreen from '../screens/MonthClassesScreen';
import DayClassesScreen from '../screens/DayClassesScreen';

const Stack = createNativeStackNavigator();

const GetClassesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MonthClassesScreen">
      <Stack.Screen name="MonthClassesScreen" component={MonthClassesScreen} />
      <Stack.Screen name="DayClassesScreen" component={DayClassesScreen} />
    </Stack.Navigator>
  );
};

export default GetClassesNavigator;

const styles = StyleSheet.create({});
