import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from '../screens/DashboardScreen';
import COLORS from '../constants/Colors';
import FONTS from "../constants/Fonts";

const Stack = createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTittle: 'TuYoga.Es',
        headerStyle: {
          backgroundColor: COLORS.lightGreen,
        },
        headerTitleAlign: 'center',
        headerTintColor: "black",
        headerTitleStyle: {
          fontFamily: FONTS.comfortaaSemiBold,
          fontWeight: "bold",
          fontSize: 25,
          color: COLORS.darkGreen
        },
        
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{title: 'TuYoga.Es'}}/>
    </Stack.Navigator>
  );
};

export default DashboardNavigator;