import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RegisterScreen from "../screens/RegisterScreen";
import LogInScreen from "../screens/LogInScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name='LogIn' component={LogInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;