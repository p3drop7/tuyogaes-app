import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import COLORS from "../constants/Colors";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;