import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MonthClassesScreen from '../screens/MonthClassesScreen';
import DayClassesScreen from '../screens/DayClassesScreen';
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const GetClassesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MonthClassesScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MonthClassesScreen" component={MonthClassesScreen} />
      <Stack.Screen name="DayClassesScreen" component={DayClassesScreen}/>
    </Stack.Navigator>
  );
};

export default GetClassesNavigator;
