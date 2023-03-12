import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dashboard from '../screens/Dashboard'
import GetClasses from '../screens/GetClasses'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="GetClasses" component={GetClasses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator

const styles = StyleSheet.create({})