import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from '../screens/DashboardScreen';
import COLORS from '../constants/Colors';
import FONTS from "../constants/Fonts";

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    </Stack.Navigator>
  );
};

export default DashboardNavigator;