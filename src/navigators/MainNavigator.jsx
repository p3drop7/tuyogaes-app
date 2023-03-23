import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator

const styles = StyleSheet.create({})