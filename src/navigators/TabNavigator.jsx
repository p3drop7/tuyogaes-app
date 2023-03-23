import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardNavigator from './DashboardNavigator';
import GetClassesNavigator from './GetClassesNavigator';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
    }}>

        <Tab.Screen name='DashboardNavigator' component={DashboardNavigator} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabButton}>
                <Feather name="check-circle" size={22} color={ focused ? 'blue' : 'black' } />
                <Text>Mis Clases</Text>
              </View>
            )
          }} 
        />

        <Tab.Screen name='GetClassesNavigator' component={GetClassesNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabButton}>
                <Ionicons name="add-circle-outline" size={26} color={ focused ? "blue" : "black" } />
                <Text>Agregar Clases</Text>
              </View>
            )
          }}
        />

    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})