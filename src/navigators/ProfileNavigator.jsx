import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import EditPictureScreen from "../screens/EditPictureScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditPicture" component={EditPictureScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;